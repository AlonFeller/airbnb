import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Star } from "@mui/icons-material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch } from "react-redux";
import { removeStay } from "../../store/stay/stay.actions";
// import img from '../../assets/Images/001.jpeg'





export const MyStayPreview = (props) => {
    const [stay, setStay] = useState(props.stay)
    const [imgNum, setImgNum] = useState(0)
    const [likeHeart, setLikeHeart] = useState(false)

    const dispatch = useDispatch()

    const cycleImgs = (ev, diff) => {
        ev.stopPropagation()

        if (stay.imgUrls.length === imgNum + diff) {
            setImgNum(0)
            return
        }
        else if (imgNum + diff < 0) {
            setImgNum(stay.imgUrls.length - 1)
            return
        }
        setImgNum(imgNum + diff)
    }

    const navigate = useNavigate()

    const goTo = (path) => {
        navigate('/stay/' + path)
    }

   const onRemoveStay = () => {

            dispatch(removeStay(stay._id))
   }


    return (
        <section className='stay-preview' onClick={() => goTo(stay._id)}>
            <div className="explore-img-container">
                <img src={require("../../assets/Images/" + stay.imgUrls[imgNum])}
                    height='270' width='270' className="img-preview" alt="" />
                <div className="cycle-btn-container">
                    <div className="back-btn" onClick={(event) => cycleImgs(event, -1)}><ArrowLeftIcon /></div>
                    <div className="next-btn" onClick={(event) => cycleImgs(event, 1)}><ArrowRightIcon/></div>
                </div>
            </div>
            <div className="locatoing-rating">
                <h3>{stay.address.city + ', ' + stay.address.country} </h3>
                {stay.reviewScores.rating && <h3><span>{stay.reviewScores.rating / 20}</span>< Star /></h3>}
                {!stay.reviewScores.rating && <h3><span>4.63</span> < Star /></h3>}
            </div>
            <p>{(stay.name.length > 30)? stay.name.substring(0, 30) + '...' : stay.name}</p>

            <button className="backoffice-preview-btn" onClick={()=> onRemoveStay}>Remove Stay</button>
           
            
        </section>
    )



}
