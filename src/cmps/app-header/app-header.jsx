import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { LoginSignUp } from './login-siginup'
import { NavBar } from './nav-bar-host'
import { Searchbar } from './searchbar'


export function AppHeader() {

    return (
        <>
            header
             
            <h1>logo</h1>

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

