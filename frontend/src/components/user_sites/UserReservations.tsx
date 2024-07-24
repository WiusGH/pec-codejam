import React, { useState } from 'react'
import CustomInput from '../inputs/CustomInput'
import style from './UserReservations.module.css'

interface FormData {
  username: string;
  password: string;
  email: string;
  user_type: string;
}


const UserReservations = () => {

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


  return (
    <div>
      <form>
        <CustomInput type='text' name='username' placeholder='username' onChange={handleChange}/>
        <CustomInput type='password' name='password' placeholder='password' onChange={handleChange}/>
        <button className={style.loginButton} type='submit'>Login</button>
      </form>
    </div>
  )
}

export default UserReservations