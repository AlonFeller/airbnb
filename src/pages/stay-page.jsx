import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate, useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service'
import { loadStay } from '../store/stay/stay.actions'

export function StayPage({stay, loadStay}) {
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        loadStay(stayId)
        console.log(stay)

    }, [])

    const goTo = (path) => {

        navigate('/')
        navigate(path)
    }

    return (
        <>

            <h3>pop header?</h3>

            <h3>reserve</h3>

            <h3>photos</h3>
            <h3>amenities</h3>
            <h3>reviews</h3>
            <h3>locations</h3>
            <h3>map?</h3>




            <button onClick={() => goTo('/explore')}>explore</button>
            <button onClick={() => goTo('/')}>home</button>
        </>
    )
}
