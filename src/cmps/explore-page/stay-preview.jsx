import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Star } from "@mui/icons-material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/user/user.actions";
import { Image } from "cloudinary-react";
import ImageCarousel from "./carousel";





export const StayPreview = (props) => {
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

    const ToggleHeart = (ev) => {
        ev.stopPropagation()
        if (!user) {
            document.body.classList.toggle("login-page-open");
            document.body.classList.toggle("login-screen-open");
        } else {
            setLikeHeart(!likeHeart)
            if (!user.favorites) {
                user.favorites = []
            }
            if (user.favorites.map(fav => fav._id).includes(stay._id)) {
                user.favorites = user.favorites.filter(fav => fav._id !== stay._id)
            } else {
                user.favorites.push(stay)
            }

            dispatch(updateUser(user))
        }

    }


    return (
        <section className='stay-preview' >
            <div className="explore-img-container" >
                     {/* <Image cloudName="airzula" className="img-preview" 
                     publicId={'https://res.cloudinary.com/airzula/image/upload/airzula/' + stay.imgUrls[imgNum]}/> */}
                     <ImageCarousel stay={stay} />
                <div className={(likeHeart)?"heart-btn full":"heart-btn empty"} onClick={(event) => ToggleHeart(event, likeHeart)}>{(likeHeart) ? '❤' : '❤'}</div>
                {/* <div className="cycle-btn-container">
                    <div className="back-btn-container"><div className="back-btn" onClick={(event) => cycleImgs(event, -1)}><ArrowLeftIcon className="ArrowLeftIcon" /></div></div>
                    <div className="next-btn-container"><div className="next-btn" onClick={(event) => cycleImgs(event, 1)}><ArrowRightIcon  className="ArrowRightIcon"/></div></div>
                </div> */}
            </div>
            <div className="locatoing-rating" >
                <h3>{stay.address.city + ', ' + stay.address.country} </h3>
                {stay.reviewScores.rating && <span className="preview-rating-star"><span>{(stay.reviewScores.rating / 20).toFixed(1)}</span>< Star /></span>}
                {!stay.reviewScores.rating && <span className="preview-rating-star"><span>4.6</span> < Star /></span>}
            </div>
            <p className="second-title">{(stay.name.length > 45) ? stay.name.substring(0, 45) + '...' : stay.name}</p>
            {/* <p>{stay.name.substring(0, 30) + '...'}</p> */}
            {/* <p>{stay.summary.substring(0, 35) + '...'}</p> */}

            {/* <h3>{'$' + stay.price}</h3><p>/night</p> */}
            <p><strong className="bold">{'$' + stay.price}</strong> night</p>

        </section>
    )



}
