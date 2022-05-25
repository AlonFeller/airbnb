import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom'


export function HomePage() {

    const navigate = useNavigate()

    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }

    return (
        <>
            hi from homepage

            <h1>hero?</h1>

            <h1>popular destinations list?</h1>
            <h1>top rated list?</h1>
            <h1>property type list?</h1>

            <h1>picture?</h1>


            <h1></h1>





            <button onClick={() => goTo('/explore')}>explore</button>
            <button onClick={() => goTo('/stay')}>stay</button>
        </>
    )
}
