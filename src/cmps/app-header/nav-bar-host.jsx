import { useNavigate } from "react-router-dom"
import NotificationsIcon from '@mui/icons-material/Notifications';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Dehaze } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useDispatch, useSelector } from "react-redux";
import { onLogout, removeUserImg } from "../../store/user/user.actions";
import { useEffect, useState } from "react";
import { toggleIsExplore } from "../../store/header/header.action";
import { socketService } from "../../services/socket.service";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';





export const NavBar = (props) => {
    const { isExplore, isPageScroll, isStay, isHome } = props
    const user = useSelector((state => state.userModule.user))
    const userImg = useSelector((state => state.userModule.userImg))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }
    
    useEffect(() => {    
    }, [user, userImg])

    useEffect(() => {

        socketService.on('order recieved', orderArrived);
        console.log('listening to order recieved');

        return () => {
            socketService.off('order recieved', orderArrived)
        }
    }, [])

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

    const [orderNotifications, setOrderNotifications] = useState([])
    const [isNewNoti, setIsNewNoti] = useState(false)
    const [presentNoti, setPresentNoti] = useState(false)


    const openNotiTab = (ev) => {
        ev.stopPropagation()
        setIsNewNoti(false)
        setPresentNoti(!presentNoti)
    }


    const onLogoutUser = () => {
        goTo('/')
        dispatch(onLogout())
    }

    const displayLoginModal = () => {

        document.body.classList.toggle("login-slide-modal-open");

    }

    const orderArrived = (order) => {
        console.log('order arrived from', order.buyer.name);
        setIsNewNoti(true)
        setOrderNotifications([order.buyer.name, ...orderNotifications])
    }
  

    return (
        <section className="header-navbar-container">
            <div className={(!isPageScroll && isHome) ? "header-navbar" : "header-navbar dark"}>
                <div className="nav-btn explore" onClick={() => goTo('explore')}>Explore</div>
                <div className="nav-btn host" onClick={() => goTo('host')}>Become a Host</div>
                <div className="user-navbar" onClick={displayLoginModal}>
                    <MenuRoundedIcon fontSize="small" className="dehaze" />
                    {(user) ? <img src={userImg} alt="" className="user-img" /> : <AccountCircleIcon />}
                    {isNewNoti && <div className="red-dot"></div>}
                    <div className={(isStay) ? "login-slide-modal stay-menu" : "login-slide-modal "} onMouseLeave={displayLoginModal} >
                        <div className="menu-btn-container">
                            {(user) ? null : <div className="login-opt-btn" onClick={toggleLogin} >Login</div>}
                            {(user) ? <div className="login-opt-btn separator" onClick={(ev) => openNotiTab(ev)}  >Notifications  {isNewNoti && <NotificationsIcon className="noti-icon" />} </div> : null}
                            {(user) ? <div className="login-opt-btn" onClick={() => goTo(`userbackoffice/stays`)} >Back office</div> : null}
                            {(user) ? <div className="login-opt-btn" onClick={() => goTo(`userbackoffice/mytrips`)} >My orders</div> : null}
                            <div className="login-opt-btn separator" onClick={() => goTo('host')} >Host</div>
                            <div className="login-opt-btn" >About</div>
                            {(user) ? <div className="login-opt-btn" onClick={() => onLogoutUser()} >Logout</div> : null}
                            {presentNoti && <div className="noti-tab" onMouseOut={() => setIsNewNoti(false)}>
                                {orderNotifications.map(order => {
                                    return <div key={order} className="noti-btn" onClick={() => goTo('userbackoffice/orders')}> New order from {order}</div>
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





