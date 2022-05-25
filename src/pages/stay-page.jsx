import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom'


export function StayPage() {

    const navigate = useNavigate()

    const goTo = (path) => {

        navigate('/')
        navigate(path)
    }

    return (
        <>
        <h1>

            stay
        </h1>

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
