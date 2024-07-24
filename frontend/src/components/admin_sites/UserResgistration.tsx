import React, { useState } from 'react'
import CustomInput from '../inputs/CustomInput'
import style from './UserRegistration.module.css'
import axios from '../../utils/axios'

interface FormData {
  username: string;
  password: string;
  email: string;
  user_type: string;
}


const UserRegistration = () => {

  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    email: '',
    user_type: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(formData)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', formData);
      console.log(response.data);
    } catch (error) {
      console.log('Registration error:', error);
    }
  }


  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <CustomInput type='text' name='username' placeholder='username' onChange={handleChange}/>
        <CustomInput type='password' name='password' placeholder='password' onChange={handleChange}/>
        <CustomInput type='email' name='email' placeholder='email' onChange={handleChange}/>
        <CustomInput type='text' name='user_type' placeholder='user_type' onChange={handleChange}/>
        <button className={style.loginButton} type='submit'>Login</button>
      </form>
    </div>
  )
}

export default UserRegistration