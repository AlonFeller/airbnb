import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Route, Link, Switch, useNavigate, useParams } from 'react-router-dom'
import { toggleIsStay } from "../store/header/header.action";
import { stayService } from '../services/stay.service'
import { loadStay, loadReviews } from '../store/stay/stay.actions'
import { StayGallery } from '../cmps/stay-page/stay-gallery'
import { StayDetails } from '../cmps/stay-page/stay-detalis'
import { StayReviews } from '../cmps/stay-page/stay-reviews'
import { StayMap } from '../cmps/stay-page/stay-map'
import { ReviewsModal } from '../cmps/stay-page/reviews-modal'
import { AddReview } from '../cmps/stay-page/add-review'
import { Star } from "@mui/icons-material"

export function StayPage() {
    const params = useParams()
    const dispatch = useDispatch()
    const { selectedStay, addedReveiw } = useSelector(storeState => storeState.stayModule)
    const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(toggleIsStay(true))
        dispatch(loadStay(params.id))
        return dispatch(toggleIsStay(false))
    }, [params.id])

    return (
        <>
            {selectedStay && <section className="stay-page">

                <h2 className="stay-name">{selectedStay.name}</h2>
                <section className="stay-info-line flex space-between">
                    <div className="stay-info-container flex">
                        <span className="icon-star">< Star /></span>
                        <h4 className="info-rating"> {(selectedStay.reviewScores.rating / 20).toFixed(1)} </h4>
                        <span className="info-point" > · </span>
                        <h4 className="info-reviews pointer" onClick={() => { setIsOpenModal(!isOpenModal)}}><u>{selectedStay.numOfReviews} reviews</u></h4>
                        <span className="info-point" > . </span>
                        {selectedStay.host.isSuperhost && <h4 className="info-super-host"> Superhost </h4>}
                        {selectedStay.host.isSuperhost && <span className="info-point" > . </span>}
                        <h4 className="info-host-address"><u> {selectedStay.address.street}</u> </h4>
                    </div>
                    <div className="info-user-btns flex space-between">
                        <div>share</div>
                        <div>save</div>
                    </div>
                </section>
                <StayGallery key="stay-gallery" stay={selectedStay} />
                <StayDetails key="stay-details" stay={selectedStay} setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} />
                <StayReviews key="stay-reviews" stay={selectedStay} reviews={selectedStay.reviews.slice(0, 6)} isLongTxt={true} />
                <div className={isOpenModal ? "screen screen-open" : "screen "} onClick={() => { setIsOpenModal(!isOpenModal)}}></div>
                {isOpenModal ? <ReviewsModal className="reviews-modal" key="reviews-modal" stay={selectedStay} setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} /> : null}
                <button className="reviews-modal-btn" onClick={() => { setIsOpenModal(true); }}>Show all {selectedStay.reviews.length} reviews</button>
                <AddReview key="add-review" stay={selectedStay} />
                <section className="stay-map">
                    <StayMap key="stay-map" stay={selectedStay} />
                </section>
                <section className="stay-modal">
                </section>
            </section>}
        </>
    )
}

