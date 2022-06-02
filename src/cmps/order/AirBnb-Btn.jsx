import { useSelector } from "react-redux"
import { showSuccessMsg } from '../../services/event-bus.service'

export const AirBnbBtn = ({ btnInnerTxt = '', onGetOrder, user, selectedStay }) => {


    const getBtnDivs = () => {
        let divStr = []
        for (let i = 0; i < 100; i++) {
            divStr.push(<div key={i + 1} className="cell" ></div >)
        }
        return divStr
    }

    const loginCheck = () => {
        if (!user) {
            document.body.classList.toggle("login-page-open");
            document.body.classList.toggle("login-screen-open");
        } else {
            onGetOrder(selectedStay, user)
        }
    }
   
    return (
        <div className="btn-container" onClick={() => loginCheck()} >
            {getBtnDivs()}
            <div className="content">
                <button className="btn"><span>{btnInnerTxt}</span></button>
            </div>

        </div>
    )

}


