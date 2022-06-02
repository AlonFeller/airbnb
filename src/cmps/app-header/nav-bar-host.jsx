import { useNavigate } from "react-router-dom"
import NotificationsIcon from '@mui/icons-material/Notifications';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Dehaze } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../../store/user/user.actions";
import { useEffect, useState } from "react";
import { toggleIsExplore } from "../../store/header/header.action";





export const NavBar = (props) => {
    const { isExplore, isPageScroll } = props
    const user = useSelector((state => state.userModule.user))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }

    useEffect(() => {
        window.addEventListener("scroll", isRender)
        return () => {
            window.removeEventListener("scroll", isRender)
        }
    }, [window.pageYOffset]);

    const isRender = () => {
        return
        // console.log("isExplore", isExplore);
        // console.log("isPageScroll", isPageScroll);
    }


   

    const onLogoutUser = () => {
        dispatch(onLogout())
    }


    return (
        <section className="header-navbar-container">
            <div className={(isPageScroll || isExplore) ? "header-navbar dark" : "header-navbar"}>
                <div className="nav-btn explore" onClick={() => goTo('explore')}>Explore</div>
                <div className="nav-btn host" onClick={() => goTo('host')}>Become a Host</div>
                {/* <NotificationsIcon /> */}
                <div className="user-navbar" onClick={displayLoginModal}>
                    <Dehaze />
                    <AccountCircleIcon />
                    <div className="login-slide-modal" onMouseOut={displayLoginModal} >
                        {(user) ? <div className="login-opt-btn" onClick={() => onLogoutUser()} >Logout</div>
                            : <div className="login-opt-btn" onClick={toggleLogin} >Login</div>}

                        {(user) ? <div className="login-opt-btn"  >Notifications</div> : null}
                        {(user) ? <div className="login-opt-btn" onClick={() => goTo(`userbackoffice/stays`)} >My Area</div> : null}
                        {(user) ? <div className="login-opt-btn" onClick={() => goTo(`userbackoffice/mytrips`)} >My trips</div> : null}
                        <div className="login-opt-btn" onClick={() => goTo('host')} >Host</div>
                        <div className="login-opt-btn" >About</div>
                    </div>
                </div>

            </div>

        </section>
    )
}


function toggleLogin() {
    document.body.classList.toggle("login-page-open");
    document.body.classList.toggle("login-screen-open");

}

function displayLoginModal() {
    document.body.classList.toggle("login-slide-modal-open");

}



