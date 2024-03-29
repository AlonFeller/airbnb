
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Images/logo_white.png'
import { AirBnbBtn } from '../cmps/order/AirBnb-Btn'
import { AirBnbBtnHost } from '../cmps/order/AirBnb-BtnHost'
import { headerIsLong, toggleIsExplore, toggleIsHome } from '../store/header/header.action'


export function BecomeAHost() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state => state.userModule.user))

    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(toggleIsExplore(false))
        dispatch(headerIsLong(true))
        dispatch(toggleIsHome(true))
        return () => {
            dispatch(toggleIsHome(false))
            dispatch(headerIsLong(false))
        }
    }, [])

    const loginCheck = () => {
        console.log('g');
        if (!user) {
            document.body.classList.toggle("login-page-open");
            document.body.classList.toggle("login-screen-open");
        } else {
            goTo('/userbackoffice')
        }
    }


    return (
        <section className="become-a-host">
            <div className="host-black-top">
                {/* <img src={logo} className="host-logo" alt="logo" onClick={() => goTo('/')} /> */}
                <div className="host-content">
                    <div className='host-content-flex'>
                        <h1 className="host-offer">Open your door <br></br>
                            &nbsp; &nbsp; to hosting</h1>
                        <AirBnbBtnHost btnInnerTxt='Try hosting' user={user} loginCheck={loginCheck} />
                    </div>
                </div>
            </div>
        </section>
    )
}



