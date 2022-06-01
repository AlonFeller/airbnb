import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Route, Link, Switch, useNavigate, useParams } from 'react-router-dom'
import { toggleIsExplore} from "../store/header/header.action";
import { stayService } from '../services/stay.service'
import { loadStay } from '../store/stay/stay.actions'
import { StayGallery } from '../cmps/stay-page/stay-gallery'
import { StayDetails } from '../cmps/stay-page/stay-detalis'
import { StayReviews } from '../cmps/stay-page/stay-reviews'
import { StayMap } from '../cmps/stay-page/stay-map'
import { ReviewsModal } from '../cmps/stay-page/reviews-modal'
import { Star } from "@mui/icons-material"

export function StayPage() {
    const params = useParams()
    const dispatch = useDispatch()
    const { selectedStay } = useSelector(storeState => storeState.stayModule)
    const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(toggleIsExplore(true))        
        dispatch(loadStay(params.id))
    }, [params.id])

    return (
        <>
            {selectedStay && <section className="stay-page">

                <h2 className="stay-name">{selectedStay.name}</h2>
                <section className="stay-info-line flex space-between">
                    <div className="stay-info-container flex">
                        <span className="icon-star">< Star /></span>
                        <h4 className="info-rating">{selectedStay.reviewScores.rating / 20}</h4>
                        <span className="info-point" > · </span>
                        <h4 className="info-reviews">{selectedStay.numOfReviews} reviews</h4>
                        <span className="info-point" > . </span>
                        {selectedStay.host.isSuperhost && <h4 className="info-super-host"> Superhost </h4>}
                        {selectedStay.host.isSuperhost && <span className="info-point" > . </span>}
                        <h4 className="info-host-address">{selectedStay.address.street}</h4>
                    </div>
                    <div className="info-user-btns flex space-between">
                        <div>share</div>
                        <div>save</div>
                    </div>
                </section>
                <StayGallery key="stay-gallery" stay={selectedStay} />
                <StayDetails key="stay-details" stay={selectedStay}  />
                <StayReviews key="stay-reviews" stay={selectedStay} reviews={selectedStay.reviews.slice(0, 6)} isLongTxt={true} />
                {isOpenModal ? <ReviewsModal className="reviews-modal" key="reviews-modal" stay={selectedStay} setIsOpenModal={setIsOpenModal} /> : null}
                <button className="reviews-modal-btn" onClick={() => {setIsOpenModal(true);}}>Show all {selectedStay.reviews.length} reviews</button>
                <section className="stay-map">
                    <StayMap key="stay-map" stay={selectedStay} />
                </section>
                <div className={(setIsOpenModal)?"modal-screen-open":"modal-screen"} onClick={() => {setIsOpenModal(!setIsOpenModal); }}></div>
            </section>}
        </>
    )
}
