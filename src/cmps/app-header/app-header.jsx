import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom'
// import { toggleDetailsLayout, toggleHeaderIsTop, toggleHeaderIsActive, toggleIsExplore } from "../../store/header/header.action";
import { headerIsLong, toggleDetailsLayout, toggleIsHome, toggleModalPosition } from "../../store/header/header.action";
import { LoginSignUp } from './login-siginup'
import { useSelector, useDispatch } from 'react-redux'
import { NavBar } from './nav-bar-host'
import { Searchbar } from './searchbar'
// import logo from '../../assets/Images/logo2.png'
// import whiteLogo from '../../assets/Images/white-logo.png'

export function AppHeader() {
    const dispatch = useDispatch()
    const { isExplore, isStay, isHome, isLong } = useSelector(state => state.headerModule.headerMode)
    const [isPageScroll, setIsPageScroll] = useState(false);
    const { user } = useSelector(storeState => storeState.userModule)
    const navigate = useNavigate()
    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }

    const logo ='https://res.cloudinary.com/airzula/image/upload/v1654519003/airzula/logo-icon.png'
    const whiteLogo = 'https://res.cloudinary.com/airzula/image/upload/v1654369282/airzula/logo_white.png'

    useEffect(() => {
        window.addEventListener("scroll", toggleHeader)
        return () => {
            window.removeEventListener("scroll", toggleHeader)
        }
    }, [window.pageYOffset]);

    function toggleHeader() {
        const modalTopPosition = window.pageYOffset + 50
        dispatch(toggleModalPosition(modalTopPosition))
        if (window.pageYOffset > 25) {
            setIsPageScroll(true)
            dispatch(headerIsLong(false))
        } else {
            setIsPageScroll(false)
            if (isHome) dispatch(headerIsLong(true))
        }
    }

    return (
        <>
            <div className={"header flex " + ((isPageScroll || isExplore || isStay) ? "full-header " : "")} >
                <section className={"header-container " + (isStay ? "isStay" : "")}>
                    <div className="logo-img-container" onClick={() => goTo('/')}>
                        <img src={(!isPageScroll && isHome) ? whiteLogo : logo} className="logo-img" alt="logo" />
                        <span className={(!isPageScroll && isHome) ? "whiteLogoTxt" : "logoTxt"}>Airzula</span>
                        </div>
                    <Searchbar isPageScroll={isPageScroll} isExplore={isExplore} isStay={isStay} isHome={isHome} />
                    <NavBar isPageScroll={isPageScroll} isExplore={isExplore} isStay={isStay} isHome={isHome} />
                    <LoginSignUp isPageScroll={isPageScroll} isExplore={isExplore} isStay={isStay} isHome={isHome} />
                    <div className="login-screen" onClick={toggleLogin}></div>
                </section>
            </div>
        </>

    )
}

// function toggleHeader() {
//     const lastScroll = window.pageYOffset
// }


function toggleLogin() {
    document.body.classList.remove("login-page-open");
    document.body.classList.remove("login-screen-open");
    document.body.classList.remove("login-slide-modal-open");

}

