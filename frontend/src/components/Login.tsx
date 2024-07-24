import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';
import CustomInput from './inputs/CustomInput';
import axios from '../utils/axios';

interface FormData {
  username: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: ''
  });

  const navigate = useNavigate();  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', formData);
      localStorage.setItem('username', response.data.username);
      localStorage.setItem('user_type', response.data.user_type);
      console.log(response.data);
      console.log(response.data.user_type);
      if (response.data.user_type === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } catch (error) {
      console.log('Login error:', error);
    }
  };


  return (
    <div className={style.login}>
      <form className={style.form} onSubmit={handleSubmit}>
        <CustomInput type='text' name='username' placeholder='username' onChange={handleChange}/>
        <CustomInput type='password' name='password' placeholder='password' onChange={handleChange}/>
        <button className={style.loginButton} type='submit'>Login</button>
      </form>
    </div>
  )
}

export default Login