import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Route, Link, Switch, useNavigate, useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import { loadStay } from '../store/stay/stay.actions'
import { StayGallery } from '../cmps/stay-page/stay-gallery'

export function StayPage() {
    const params = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { selectedStay } = useSelector(storeState => storeState.stayModule)
    console.log(selectedStay)

    useEffect(() => {
        dispatch(loadStay(params.id))
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
                <section className="stay-info">
                    <span className="icon-star">⭐</span>
                    <h4 className="info-rating">{selectedStay.reviewScores.value / 2}</h4>
                    <span className="info-point" >•</span>
                    <h4 className="info-reviews">({selectedStay.numOfReviews} reviews)</h4>
                    <span className="info-point" >•</span>
                    <h4 className="info-super-host">
                        {selectedStay.host.isSuperhost ? 'Superhost' : ''}
                    </h4>
                </section>
                    <StayGallery key={selectedStay._id} stay={selectedStay}/>
            </section>}

            <h3>amenities</h3>
            <h3>reviews</h3>
            <h3>locations</h3>
            <h3>map?</h3>




            <button onClick={() => goTo('/explore')}>explore</button>
            <button onClick={() => goTo('/')}>home</button>
        </>
    )
}
