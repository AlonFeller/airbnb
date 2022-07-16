import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Route, Link, Switch, useNavigate, useParams } from 'react-router-dom'
import { headerIsLong, toggleIsHome, toggleIsStay } from '../store/header/header.action'
import { loadStay } from '../store/stay/stay.actions'
import { StayGallery } from '../cmps/stay-page/stay-gallery'
import { StayDetails } from '../cmps/stay-page/stay-detalis'
import { StayReviews } from '../cmps/stay-page/stay-reviews'
import { StayInfoLine } from '../cmps/stay-page/stay-info-line'
import { StayMap } from '../cmps/stay-page/stay-map'
import { ReviewsModal } from '../cmps/stay-page/reviews-modal'
import { AddReview } from '../cmps/stay-page/add-review'


export function StayPage() {
    const params = useParams()
    const dispatch = useDispatch()
    const { selectedStay } = useSelector(storeState => storeState.stayModule)
    const { openOrderModal } = useSelector(storeState => storeState.orderModule)
    const [isOpenModal, setIsOpenModal] = useState(false)

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



    const onOpenReviewsModal = () => {
        if (openOrderModal) return
        setIsOpenModal(!isOpenModal)
    }


    return (
        <>
            {selectedStay && <section className="stay-page">
                <h2 className="stay-name">{selectedStay.name}</h2>
                <StayInfoLine key="stay-info-line"
                    stay={selectedStay}
                    setIsOpenModal={setIsOpenModal}
                    isOpenModal={isOpenModal}
                />
                <StayGallery key="stay-gallery" stay={selectedStay} />
                <StayDetails key="stay-details"
                    stay={selectedStay}
                    setIsOpenModal={setIsOpenModal}
                    isOpenModal={isOpenModal}
                />
                <StayReviews key="stay-reviews"
                    stay={selectedStay}
                    reviews={selectedStay.reviews.slice(0, 6)}
                    isLongTxt={true}
                />
                <div className={(isOpenModal || openOrderModal) ? "screen screen-open" : "screen "}
                    onClick={() => { onOpenReviewsModal() }}>
                </div>
                {isOpenModal ? <ReviewsModal className="reviews-modal" key="reviews-modal"
                    stay={selectedStay}
                    setIsOpenModal={setIsOpenModal}
                    isOpenModal={isOpenModal}
                /> : null}
                <button className="reviews-modal-btn" onClick={() => { setIsOpenModal(true); }}>
                    Show all {selectedStay.reviews.length} reviews
                </button>
                <AddReview key="add-review" stay={selectedStay} />
                <section className="stay-map">
                    <h2>Where you'll be</h2>
                    <StayMap key="stay-map" stay={selectedStay} />
                </section>
            </section>}
        </>
    )
}

