import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom'
import { LoginSignUp } from './login-siginup'
import { NavBar } from './nav-bar-host'
import { Searchbar } from './searchbar'
import logo from '../../assets/Images/logo.png'

export function AppHeader() {
    const navigate = useNavigate()
    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }
    return (
        <>
                       
            <img src={logo} className="logo-img" alt="logo" onClick={() => goTo('/')}/>
            <NavBar/>

            <Searchbar/>
            <LoginSignUp/>
  <div className="login-screen" onClick={toggleLogin}></div>
        </>

     
    )
}

function toggleLogin() {
    document.body.classList.toggle("login-page-open");
    document.body.classList.toggle("login-screen-open");

  }

