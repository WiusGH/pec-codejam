import React, { useState, useEffect } from "react";
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";
import style from "./Layout.module.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const logout = async () => {
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("user_type");
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <div className={style.header}>
      <Link to="/">
        <img className={style.logo} src={logo} alt="logo" />
      </Link>
      {isLoggedIn ? <button className={style.button} onClick={logout}>Logout</button> : null}
    </div>
  );
};

export default Header;
