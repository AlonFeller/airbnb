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

            <button onClick={() =>goTo('/')}>home</button>
            <button onClick={() =>goTo('/stay')}>stay</button>
        </>
    )
}