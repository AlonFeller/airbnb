import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Route, Link, Switch, useNavigate, useParams } from 'react-router-dom'
import { headerIsLong, toggleIsHome, toggleIsStay } from "../store/header/header.action";
import { updateUser } from '../store/user/user.actions'
import { loadStay } from '../store/stay/stay.actions'
import { StayGallery } from '../cmps/stay-page/stay-gallery'
import { StayDetails } from '../cmps/stay-page/stay-detalis'
import { StayReviews } from '../cmps/stay-page/stay-reviews'
import { StayMap } from '../cmps/stay-page/stay-map'
import { ReviewsModal } from '../cmps/stay-page/reviews-modal'
import { AddReview } from '../cmps/stay-page/add-review'
import { UserMsg } from '../cmps/general/user-msg'
import { Star, IosShare, FavoriteBorder, Favorite } from "@mui/icons-material"

export function StayPage() {
    const params = useParams()
    const dispatch = useDispatch()
    const { selectedStay } = useSelector(storeState => storeState.stayModule)
    const { user } = useSelector(storeState => storeState.userModule)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [likeHeart, setLikeHeart] = useState(false)
    const [savedLink, setSavedLink] = useState(false)
    const [isopenMsg, setIsopenMsg] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(toggleIsStay(true))
        dispatch(loadStay(params.id))
        dispatch(headerIsLong(false))
        dispatch(toggleIsHome(false))
        return () => {
            dispatch(toggleIsStay(false))
        }
    }, [params.id])

    function onCopyUrlToClipboard() {
        navigator.clipboard.writeText(window.location.href);
        setSavedLink(true)
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
            if (user.favorites.map(fav => fav._id).includes(selectedStay._id)) {
                user.favorites = user.favorites.filter(fav => fav._id !== selectedStay._id)
            } else {
                user.favorites.push(selectedStay)
            }
            dispatch(updateUser(user))
        }

    }

    const setTxtMsg = () => {
        let txtMsg = ''
        if (savedLink) txtMsg = 'Link Copied to clipboard'
        else if (likeHeart) txtMsg = 'Stay liked'
        else txtMsg = 'Stay unliked'
        return txtMsg
    }

    const openMsg = (name) => {
        setTxtMsg()
        setIsopenMsg(true)
        setTimeout(() => {
            closeMsg()
        }, 3000);
    }

    const closeMsg = () => {
        setIsopenMsg(false)
        setSavedLink(false)
    }

    return (
        <>
            {selectedStay && <section className="stay-page">

                <h2 className="stay-name">{selectedStay.name}</h2>
                <section className="stay-info-line flex space-between">
                    <div className="stay-info-container flex">
                        <span className="icon-star">< Star /></span>
                        <h4 className="info-rating"> {(selectedStay.reviewScores.rating / 20).toFixed(1)} </h4>
                        <span className="info-point" > · </span>
                        <h4 className="info-reviews pointer" onClick={() => { setIsOpenModal(!isOpenModal) }}><u>{selectedStay.numOfReviews} reviews</u></h4>
                        <span className="info-point" > . </span>
                        {selectedStay.host.isSuperhost && <h4 className="info-super-host"> Superhost </h4>}
                        {selectedStay.host.isSuperhost && <span className="info-point" > . </span>}
                        <h4 className="info-host-address"><u> {selectedStay.address.street}</u> </h4>
                    </div>
                    <div className="info-user-btns flex">
                        <div className="share-btn-container flex align-center" onClick={onCopyUrlToClipboard}>
                            <p className="details-share"  ><IosShare /></p>
                            <p>Share</p>
                        </div>
                        <div className="save-btn-container flex align-center" onClick={(event) => ToggleHeart(event, likeHeart)}>
                            <p className="details-save" >{!likeHeart ? <FavoriteBorder /> : <Favorite />}</p>
                            <p>Save</p>
                        </div>
                        {isopenMsg && <UserMsg />}
                    </div>
                </section>
                <StayGallery key="stay-gallery" stay={selectedStay} />
                <StayDetails key="stay-details" stay={selectedStay} setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} />
                <StayReviews key="stay-reviews" stay={selectedStay} reviews={selectedStay.reviews.slice(0, 6)} isLongTxt={true} />
                <div className={isOpenModal ? "screen screen-open" : "screen "} onClick={() => { setIsOpenModal(!isOpenModal) }}></div>
                {isOpenModal ? <ReviewsModal className="reviews-modal" key="reviews-modal" stay={selectedStay} setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} /> : null}
                <button className="reviews-modal-btn" onClick={() => { setIsOpenModal(true); }}>Show all {selectedStay.reviews.length} reviews</button>
                <AddReview key="add-review" stay={selectedStay} />
                <section className="stay-map">
                    <h2>Where you'll be</h2>
                    <StayMap key="stay-map" stay={selectedStay} />
                </section>
                <section className="stay-modal">
                </section>
            </section>}
        </>
    )
}

