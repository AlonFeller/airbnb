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
            <button onClick={() => goTo('/explore')}>explore</button>
            <button onClick={() => goTo('/')}>home</button>
        </>
    )
}
