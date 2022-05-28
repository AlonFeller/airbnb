import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Route, Link, Switch, useNavigate, useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import { loadStay } from '../store/stay/stay.actions'
import { StayGallery } from '../cmps/stay-page/stay-gallery'
import { StayDetails } from '../cmps/stay-page/stay-detalis'
import { StayReviews } from '../cmps/stay-page/stay-reviews'
import { StayMap } from '../cmps/stay-page/stay-map'
import { ReviewsModal } from '../cmps/stay-page/reviews-modal'

export function StayPage() {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { selectedStay } = useSelector(storeState => storeState.stayModule)
    // const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {
        dispatch(loadStay(params.id))
        console.log(selectedStay)
    }, [params.id])


    const goTo = (path) => {

        navigate('/')
        navigate(path)
    }

    // const OpenReviewsModal = () => {
    //     isOpenModal ? { display: 'block' } : { display: 'none' }
    // }

    return (
        <>
            <h3>pop header?</h3>

            <h3>reserve</h3>
            {selectedStay && <section className="stay-page">

                <h2 className="stay-name">{selectedStay.name}</h2>
                <section className="stay-info-line flex space-between">
                    <div className="stay-info-container flex">
                        <span className="icon-star">⭐</span>
                        <h4 className="info-rating">{selectedStay.reviewScores.rating / 20}</h4>
                        <span className="info-point" >•</span>
                        <h4 className="info-reviews">({selectedStay.numOfReviews} reviews)</h4>
                        <span className="info-point" >•</span>
                        {selectedStay.host.isSuperhost && <h4 className="info-super-host">Superhost </h4>}
                        {selectedStay.host.isSuperhost && <span className="info-point" >•</span>}
                        <h4 className="info-host-address">{selectedStay.address.street}</h4>
                    </div>
                    <div className="info-user-btns flex space-between">
                        <div>share</div>
                        <div>save</div>
                    </div>
                </section>
                <StayGallery key="stay-gallery" stay={selectedStay} />
                <StayDetails key="stay-details" stay={selectedStay} />
                <StayReviews key="stay-reviews" stay={selectedStay} />
                {/* <ReviewsModal className="reviews-modal" style={OpenReviewsModal()} key="reviews-modal" stay={selectedStay} />
                <button className="reviews-modal-btn" onClick={() => setIsOpenModal(!isOpenModal)}>Show all {selectedStay.reviews.length} reviews</button> */}
                <section className="stay-map">
                    <StayMap key="stay-map" stay={selectedStay} />
                </section>
            </section>}
        </>
    )
}
