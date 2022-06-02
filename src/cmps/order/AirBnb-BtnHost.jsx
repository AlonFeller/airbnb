

export const AirBnbBtnHost = ({  btnInnerTxt = '' , user , loginCheck}) => {
    

    const getBtnDivs = () => {
        let divStr = []
        for (let i = 0; i < 100; i++) {
            divStr.push(<div key={i + 1} className="cell" ></div >)
        }
        return divStr
    }
   
    return (
        <div className="btn-container"  onClick={()=> loginCheck(user)} >
            {getBtnDivs()}
            <div className="content">
                <button className="btn" ><span>{btnInnerTxt}</span></button>
            </div>

        </div>
    )

}


