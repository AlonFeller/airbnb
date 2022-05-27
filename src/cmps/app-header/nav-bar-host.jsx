import { useNavigate } from "react-router-dom"
import NotificationsIcon from '@mui/icons-material/Notifications';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Dehaze } from "@mui/icons-material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




export const NavBar = (props) =>  {

    const navigate = useNavigate()

    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }








    return (
        <section className="header-navbar-container">
                <div className="header-navbar">

            <div className="nav-btn" onClick={()=> goTo('explore')}>Explore</div>
            <div className="nav-btn">Become a Host</div>
            <NotificationsIcon/>
            <div className="user-navbar">
                <Dehaze/>
                <AccountCircleIcon/>
            </div>
            
                </div>
            
        </section>
    )
}