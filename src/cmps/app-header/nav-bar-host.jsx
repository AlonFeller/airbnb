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

    const orderNotifications = [{ by: 'Sarah' },
    { by: 'Mosses' }]
    const [isNewNoti, setIsNewNoti] = useState(true)
    const [presentNoti, setPresentNoti] = useState(false)
    

    const openNotiTab = (ev) => {
        ev.stopPropagation()
        setIsNewNoti(false)
        setPresentNoti(!presentNoti)
    }


    const onLogoutUser = () => {
        dispatch(onLogout())
    }

    const displayLoginModal = () => {
        document.body.classList.toggle("login-slide-modal-open");
    }


    return (
        <section className="header-navbar-container">
            <div className={(isPageScroll || isExplore) ? "header-navbar dark" : "header-navbar"}>
                <div className="nav-btn explore" onClick={() => goTo('explore')}>Explore</div>
                <div className="nav-btn host" onClick={() => goTo('host')}>Become a Host</div>
                {/* <NotificationsIcon /> */}
                <div className="user-navbar" onClick={displayLoginModal}>
                    <Dehaze fontSize="small" className="dehaze" />
                    {(user) ? <img src={user.imgUrl} alt="" className="user-img" /> : <AccountCircleIcon />}
                    {isNewNoti && <div className="red-dot"></div>}
                    <div className="login-slide-modal" onMouseOut={displayLoginModal} >
                        <div className="menu-btn-container">
                        {(user) ? <div className="login-opt-btn" onClick={() => onLogoutUser()} >Logout</div>
                            : <div className="login-opt-btn" onClick={toggleLogin} >Login</div>}

                        {(user) ? <div className="login-opt-btn" onClick={(ev) => openNotiTab(ev)}  >Notifications  {isNewNoti && <NotificationsIcon className="noti-icon" />} </div> : null}
                        {(user) ? <div className="login-opt-btn" onClick={() => goTo(`userbackoffice/stays`)} >My Area</div> : null}
                        {(user) ? <div className="login-opt-btn" onClick={() => goTo(`userbackoffice/mytrips`)} >My trips</div> : null}
                        <div className="login-opt-btn" onClick={() => goTo('host')} >Host</div>
                        <div className="login-opt-btn" >About</div>
                        {presentNoti && <div className="noti-tab" onMouseOut={() => setIsNewNoti(false)}>
                            { orderNotifications.map(order => {
                                return <div key={order.by} className="noti-btn" onClick={() => goTo('userbackoffice/orders')}> New order from {order.by}</div>
                            })}
                        </div>}
                    </div>
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





