import { useEffect, useState } from "react"
// import img from '../../assets/Images/001.jpeg'




export const StayPreview = (props) => {
    const [stay, setStay] = useState(props.stay)
    const [imgNum, setImgNum] = useState(0)

    useEffect(() => {
    }, [])

    const cycleImgs = (diff) => {

        if (stay.imgUrls.length === imgNum + diff) {
            setImgNum(0)
            return
        }
        else if (imgNum + diff < 0) {
            setImgNum(stay.imgUrls.length -1)
            return
        }
        setImgNum(imgNum + diff)
    }


    return (
        <section className='stay-preview'>
            <div className="img-container">
                <div className="heart-btn">🤍</div>
                <div className="cycle-btn-container">
                    <div className="back-btn" onClick={() => cycleImgs(-1)}>⪡</div>
                    <div className="next-btn" onClick={() => cycleImgs(1)}>⪢</div>
                </div>
                <img src={require("../../assets/Images/" + stay.imgUrls[imgNum])}
                    height='270' width='270' className="img-preview" alt="" />
            </div>
            <h3>{stay.name}</h3>
            <p>{stay.summary.substring(0, 35) + '...'}</p>
            <h3>{'$' + stay.price}</h3>
            <h4></h4>
        </section>
    )



}
