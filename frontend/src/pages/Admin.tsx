import React from 'react'
import MainContainer from '../components/containers/MainContainer'
import AdminRegisterForm from '../components/admin_sites/AdminRegisterForm'

const Admin = () => {
  return (
    <div>
      <MainContainer content={<AdminRegisterForm/>}/>
    </div>
  )
}

export default Admin