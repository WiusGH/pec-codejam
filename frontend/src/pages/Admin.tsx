import React from 'react'
import MainContainer from '../components/containers/MainContainer'
import UserRegistration from '../components/admin_sites/UserResgistration'

const Admin = () => {
  return (
    <div>
      <MainContainer content={<UserRegistration/>}/>
    </div>
  )
}

export default Admin