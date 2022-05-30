import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom'
import { toggleDetailsLayout, toggleHeaderIsTop, toggleHeaderIsActive, toggleIsExplore } from "../../store/header/header.action";
import { LoginSignUp } from './login-siginup'
import { NavBar } from './nav-bar-host'
import { Searchbar } from './searchbar'
import logo from '../../assets/Images/logo2.png'

export function AppHeader() {
    const navigate = useNavigate()
    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }
    return (
        <>
            <div className="header flex">
                <div className="logo-img-container"><img src={logo} className="logo-img" alt="logo" onClick={() => goTo('/')} /></div>
                <Searchbar />
                <NavBar />
                <LoginSignUp />
                <div className="login-screen" onClick={toggleLogin}></div>
            </div>
        </>


    )
}

function toggleLogin() {
    document.body.classList.toggle("login-page-open");
    document.body.classList.toggle("login-screen-open");
    document.body.classList.remove("login-slide-modal-open");

}

