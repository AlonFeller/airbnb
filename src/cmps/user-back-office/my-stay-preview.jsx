import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Star } from "@mui/icons-material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/user/user.actions";
import { Image } from "cloudinary-react";
// import img from '../../assets/Images/001.jpeg'




export const MyStayPreview = (props) => {
    const [stay, setStay] = useState(props.stay)
    const [imgNum, setImgNum] = useState(0)
    const user = useSelector((state => state.userModule.user))
    const [likeHeart, setLikeHeart] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (user && user.favorites) {
            if (user.favorites.map(fav => fav._id).includes(stay._id)) {
                setLikeHeart(true)
            }
        }
    }, [user])

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

        dispatch(onRemoveStay(stay._id))
    }


    return (
        <section className='stay-preview' onClick={() => goTo(stay._id)}>
            <div className="explore-img-container" >
                     <Image cloudName="airzula" className="img-preview" 
                     publicId={'https://res.cloudinary.com/airzula/image/upload/airzula/' + stay.imgUrls[imgNum]}/>
                <div className="cycle-btn-container">
                    <div className="back-btn" onClick={(event) => cycleImgs(event, -1)}><ArrowLeftIcon /></div>
                    <div className="next-btn" onClick={(event) => cycleImgs(event, 1)}><ArrowRightIcon /></div>
                </div>
            </div>
            <div className="locatoing-rating">
                <h3>{stay.address.city + ', ' + stay.address.country} </h3>
            </div>
            <p>{(stay.name.length > 30) ? stay.name.substring(0, 30) + '...' : stay.name}</p>

<               button className="backoffice-preview-btn" onClick={()=> onRemoveStay}>Remove Stay</button>
        </section>
    )



}



