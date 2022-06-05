import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom'
// import { toggleDetailsLayout, toggleHeaderIsTop, toggleHeaderIsActive, toggleIsExplore } from "../../store/header/header.action";
import { headerIsLong, toggleDetailsLayout, toggleIsHome, toggleModalPosition } from "../../store/header/header.action";
import { LoginSignUp } from './login-siginup'
import { useSelector, useDispatch } from 'react-redux'
import { NavBar } from './nav-bar-host'
import { Searchbar } from './searchbar'
import logo from '../../assets/Images/logo2.png'
import whiteLogo from '../../assets/Images/white-logo.png'
import { UserMsg } from "../general/user-msg"

export function AppHeader() {
    const dispatch = useDispatch()
    const { isExplore, isStay, isHome, isLong } = useSelector(state => state.headerModule.headerMode)
    const [isPageScroll, setIsPageScroll] = useState(false);
    const { user } = useSelector(storeState => storeState.userModule)
    const [isOpenedMsg, setIsOpenedMsg] = useState(false)
    const [txtMsg, setTxtMsg] = useState(null)
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
        // console.log(window.pageYOffset);
        const modalTopPosition = window.pageYOffset + 50
        // console.log("modalTopPosition", modalTopPosition);
        dispatch(toggleModalPosition(modalTopPosition))
        if (window.pageYOffset > 25) {
            setIsPageScroll(true)
            dispatch(headerIsLong(false))
        } else {
            setIsPageScroll(false)
            if (isHome) dispatch(headerIsLong(true))

        }
        // console.log("isPageScroll", isPageScroll, "isHome", isHome,"isLong",isLong);
    }

    const openMsg = (name) => {
        setTxtMsg('Hello' + name + ', welcome to Airzula')
        setIsOpenedMsg(true)
        setTimeout(() => {
            closeMsg()
        }, 3000);
    }

    const closeMsg = () => {
        setIsOpenedMsg(false)
    }

    return (
        <>
            <div className={"header flex " + ((isPageScroll || isExplore || isStay) ? "full-header " : "")} >
                <section className={"header-container " + (isStay ? "isStay" : "")}>
                    <div className="logo-img-container">
                        <img src={(!isPageScroll && isHome) ? whiteLogo : logo} className="logo-img" alt="logo" onClick={() => goTo('/')} /></div>
                    <Searchbar isPageScroll={isPageScroll} isExplore={isExplore} isStay={isStay} isHome={isHome} />
                    <NavBar isPageScroll={isPageScroll} isExplore={isExplore} isStay={isStay} isHome={isHome} />
                    <LoginSignUp isPageScroll={isPageScroll} isExplore={isExplore} isStay={isStay} isHome={isHome} openMsg={openMsg} />
                    <div className="login-screen" onClick={toggleLogin}></div>
                </section>
                {isOpenedMsg && <UserMsg msg={txtMsg} closeMsg={closeMsg} />}
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

