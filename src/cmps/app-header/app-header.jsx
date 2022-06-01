import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom'
// import { toggleDetailsLayout, toggleHeaderIsTop, toggleHeaderIsActive, toggleIsExplore } from "../../store/header/header.action";
import { toggleIsExplore, toggleHeaderIsTop, toggleHeaderIsActive } from "../../store/header/header.action";
import { LoginSignUp } from './login-siginup'
import { NavBar } from './nav-bar-host'
import { Searchbar } from './searchbar'
import logo from '../../assets/Images/logo2.png'
import { useSelector } from 'react-redux';

export function AppHeader() {
    const { isExplore } = useSelector(state => state.headerModule.headerMode)
    const [isPageScroll, setIsPageScroll] = useState(false);
    const navigate = useNavigate()
    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }


    useEffect(() => {
        window.addEventListener("scroll", toggleHeader)
         return () => {
            window.removeEventListener("scroll", toggleHeader)
        }
    }, [window.pageYOffset]);

    function toggleHeader() {
        if (window.pageYOffset > 25) {
            setIsPageScroll(true)
        } else {
            setIsPageScroll(false)
        }
    }

    return (
        <>
            <div className={"header flex " + ((isPageScroll || isExplore) ? "full-header " : "")} >
                <section className="header-container">
                    <div className="logo-img-container">
                        <img src={logo} className="logo-img" alt="logo" onClick={() => goTo('/')} /></div>
                    <Searchbar isPageScroll={isPageScroll} isExplore={isExplore} />
                    <NavBar isPageScroll={isPageScroll} isExplore={isExplore} />
                    <LoginSignUp isPageScroll={isPageScroll} isExplore={isExplore} />
                    <div className="login-screen" onClick={toggleLogin}></div>
                </section>
            </div>
        </>

    )
}

function toggleHeader() {
    const lastScroll = window.pageYOffset
}


function toggleLogin() {
    document.body.classList.remove("login-page-open");
    document.body.classList.remove("login-screen-open");
    document.body.classList.remove("login-slide-modal-open");

}

