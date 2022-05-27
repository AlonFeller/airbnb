import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate } from 'react-router-dom'
import { ExploreFilter } from '../cmps/explore-page/filter'
import { StayList } from '../cmps/explore-page/stay-list'


export function ExplorePage() {

    
    
    const navigate = useNavigate()

    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }


    return (
        <>

            <button onClick={() =>goTo('/')}>home</button>


            <ExploreFilter/>

            <StayList/>
        </>
    )
}