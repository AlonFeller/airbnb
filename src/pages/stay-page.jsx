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
            stay

            <h1>pop header?</h1>

            <h1>reserve</h1>

            <h1>photos</h1>
            <h1>amenities</h1>
            <h1>reviews</h1>
            <h1>locations</h1>
            <h1>map?</h1>




            <button onClick={() => goTo('/explore')}>explore</button>
            <button onClick={() => goTo('/')}>home</button>
        </>
    )
}
