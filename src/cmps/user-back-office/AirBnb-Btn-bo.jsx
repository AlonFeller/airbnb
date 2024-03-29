
export const AirBnbBtnBo = ({ btnInnerTxt = '', onGetOrder, user, selectedStay }) => {


    const getBtnDivs = () => {
        let divStr = []
        for (let i = 0; i < 100; i++) {
            divStr.push(<div key={i + 1} className="cell" ></div >)
        }
        return divStr
    }

   
    return (
        <div className="btn-container">
            {getBtnDivs()}
            <div className="content">
                <button className="btn"><span>{btnInnerTxt}</span></button>
            </div>

        </div>
    )

}


