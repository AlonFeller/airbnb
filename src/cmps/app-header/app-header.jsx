import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom'
// import { toggleDetailsLayout, toggleHeaderIsTop, toggleHeaderIsActive, toggleIsExplore } from "../../store/header/header.action";
import { headerIsLong, toggleDetailsLayout, toggleIsHome, toggleModalPosition } from "../../store/header/header.action";
import { LoginSignUp } from './login-siginup'
import { NavBar } from './nav-bar-host'
import { Searchbar } from './searchbar'
import logo from '../../assets/Images/logo2.png'
import whiteLogo from '../../assets/Images/white-logo.png'
import { useDispatch, useSelector } from 'react-redux';

export function AppHeader() {
    const dispatch = useDispatch()
    const { isExplore, isStay, isHome, isLong } = useSelector(state => state.headerModule.headerMode)
    const [isPageScroll, setIsPageScroll] = useState(false);
    const navigate = useNavigate()
    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }

    useEffect(() => {
        // console.log(window.pageYOffset);
        window.addEventListener("scroll", toggleHeader)
        return () => {
            window.removeEventListener("scroll", toggleHeader)
        }
    }, [window.pageYOffset]);

    function toggleHeader() {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 25) {
            const modalTopPosition = window.pageYOffset -350
            // console.log(modalTopPosition);
            setIsPageScroll(true)
            dispatch(headerIsLong(false))
            dispatch(toggleModalPosition(modalTopPosition))
        } else {
            setIsPageScroll(false)
            if(isHome)dispatch(headerIsLong(true))
            dispatch(toggleModalPosition(0))
        }
        console.log("isPageScroll", isPageScroll, "isHome", isHome,"isLong",isLong);
    }

    return (
        <>
            <div className={"header flex " + ((isPageScroll || isExplore || isStay) ? "full-header " : "")} >
                <section className={"header-container " + (isStay ? "isStay" : "")}>
                    <div className="logo-img-container">
                        <img src={(!isPageScroll && isHome) ? whiteLogo : logo} className="logo-img" alt="logo" onClick={() => goTo('/')} /></div>
                    <Searchbar isPageScroll={isPageScroll} isExplore={isExplore} isStay={isStay} isHome={isHome}/>
                    <NavBar isPageScroll={isPageScroll} isExplore={isExplore} isStay={isStay} isHome={isHome} />
                    <LoginSignUp isPageScroll={isPageScroll} isExplore={isExplore} isStay={isStay} isHome={isHome} />
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

