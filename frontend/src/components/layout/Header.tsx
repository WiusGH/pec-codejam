import React, { useEffect} from 'react'
import logo from '../../images/logo.jpg'
import { Link } from 'react-router-dom'
import style from './Layout.module.css'
import axios from '../../utils/axios'

const Header = () => {
  return (
    <div className={style.header}>
      <Link to='/'><img className={style.logo} src={logo} alt='logo' /></Link>
    </div>
  )
}

export default Header