import { useSelector } from "react-redux"
import {showSuccessMsg} from '../../services/event-bus.service'

export const AirBnbBtn = ({ btnAction, btnInnerTxt = '' }) => {
    
    const user = useSelector(state => state.userModule.user)

    function btnAction() {
        if (!user) {
            document.body.classList.toggle("login-page-open");
            document.body.classList.toggle("login-screen-open");
        } else {
            
            alert('congratz! order reserved')
            // window.myBus.showSuccessMsg('congratz! order reserved')
        }
    }

    const getBtnDivs = () => {
        let divStr = []
        for (let i = 0; i < 100; i++) {
            divStr.push(<div key={i + 1} className="cell" ></div >)
        }
        return divStr
    }
    const onBtnAction = () => {
        btnAction()
    }
    return (
        <div className="btn-container" onClick={() => { onBtnAction() }}>
            {getBtnDivs()}
            <div className="content">
                <button className="btn"><span>{btnInnerTxt}</span>Order Now</button>
            </div>

        </div>
    )

}


