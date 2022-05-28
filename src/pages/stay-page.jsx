import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Route, Link, Switch, useNavigate, useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import { loadStay } from '../store/stay/stay.actions'
import { StayGallery } from '../cmps/stay-page/stay-gallery'
import { StayDetails } from '../cmps/stay-page/stay-detalis'
import { StayReviews } from '../cmps/stay-page/stay-reviews'
import { StayMap } from '../cmps/stay-page/stay-map'

export function StayPage() {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { selectedStay } = useSelector(storeState => storeState.stayModule)

    useEffect(() => {
        dispatch(loadStay(params.id))
        console.log(selectedStay)
    }, [params.id])


    const goTo = (path) => {

        navigate('/')
        navigate(path)
    }

    return (
        <>
            <h3>pop header?</h3>

            <h3>reserve</h3>
            {selectedStay && <section className="stay-page">

                <h2 className="stay-name">{selectedStay.name}</h2>
                <section className="stay-info flex ">
                    <span className="icon-star">⭐</span>
                    <h4 className="info-rating">{selectedStay.reviewScores.rating / 20}</h4>
                    <span className="info-point" >•</span>
                    <h4 className="info-reviews">({selectedStay.numOfReviews} reviews)</h4>
                    <span className="info-point" >•</span>
                    <h4 className="info-super-host">
                        {selectedStay.host.isSuperhost ? 'Superhost' : ''}
                    </h4>
                </section>
                <StayGallery key="stay-gallery" stay={selectedStay} />
                <StayDetails key="stay-details" stay={selectedStay} />
                <StayReviews key="stay-reviews" stay={selectedStay} />
                <section className="stay-map">
                    <StayMap key="stay-map" stay={selectedStay} />
                </section>
            </section>}


            <button onClick={() => goTo('/explore')}>explore</button>

        </>
    )
}
