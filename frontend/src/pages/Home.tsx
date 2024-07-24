import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MainContainer from '../components/containers/MainContainer'
import Login from '../components/Login'

const Home = () => {

  const navigate = useNavigate()

  useEffect(() => {
    let currentUser = localStorage.getItem('username')
    if (currentUser) {
      let userType = localStorage.getItem('user_type')
      console.log(userType)
      if (userType === 'admin') {
        navigate('/admin')
      }
      else {
        navigate('/user')
      }
    }
     
  }, [])
  return (
    <div>
      <MainContainer content={<Login/>} />
    </div>
  )
}

export default Home