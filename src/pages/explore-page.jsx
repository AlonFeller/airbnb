import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom'
import { StayList } from '../cmps/explore-page/stay-list'


export function ExplorePage() {

    
    
    const navigate = useNavigate()

    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }


    return (
        <>
        <h1>

            explore
        </h1>
            <StayList/>

            <h3>filter</h3>
            <h3>list of perview</h3>



            <button onClick={() =>goTo('/')}>home</button>
            <button onClick={() =>goTo('/stay')}>stay</button>
        </>
    )
}