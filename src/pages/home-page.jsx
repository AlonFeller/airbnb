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
            <button onClick={() => goTo('/explore')}>explore</button>
            <button onClick={() => goTo('/stay')}>stay</button>
        </>
    )
}
