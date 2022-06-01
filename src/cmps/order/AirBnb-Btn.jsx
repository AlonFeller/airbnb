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
   
    return (
        <div className="btn-container" onClick={() => onGetOrder(selectedStay, user)} >
            {getBtnDivs()}
            <div className="content">
                <button className="btn"><span>{btnInnerTxt}</span></button>
            </div>

        </div>
    )

}


