import { useEffect, useState } from "react"
// import img from '../../assets/Images/001.jpeg'




export const StayPreview = (props) => {
    const [stay, setStay] = useState(props.stay)
    const [imgNum, setImgNum] = useState(0)

    useEffect(() => {
    }, [])


    return (
        <section className='stay-preview'>
            <img src={require("../../assets/Images/" + stay.imgUrls[imgNum])}
             height='270' width='270' className="img-preview" onClick={() => setImgNum(imgNum+ 1)} alt="" />
            <h3>{stay.name}</h3>
            <p>{stay.summary.substring(0,35) + '...'}</p>
            <h3>{'$' +stay.price}</h3>
            <h4></h4>
        </section>
    )



}
