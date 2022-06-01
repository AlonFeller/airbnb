
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Images/logo_white.png'
import { AirBnbBtn } from '../cmps/stay-order/AirBnb-Btn'
import { AirBnbBtnHost } from '../cmps/stay-order/AirBnb-BtnHost'


export function BecomeAHost() {
    
    const navigate = useNavigate()


    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }


    return (
        <section className="become-a-host">
            <div className="host-black-top">
                   <img src={logo} className="host-logo" alt="logo" onClick={() => goTo('/')} />

                <div className="host-content">
               <div className='host-content-flex'>


                <h1 className="host-offer">Open your door <br></br>
                &nbsp; &nbsp; to hosting</h1>
            <AirBnbBtnHost  onClick={() => goTo('/')}/>

                </div>
               </div>
                </div>
        </section>
    )
}



