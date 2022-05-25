import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom'


export function ExplorePage() {

    const navigate = useNavigate()

    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }


    return (
        <>
            explore

            <h1>filter</h1>
            <h1>list of perview</h1>



            <button onClick={() =>goTo('/')}>home</button>
            <button onClick={() =>goTo('/stay')}>stay</button>
        </>
    )
}