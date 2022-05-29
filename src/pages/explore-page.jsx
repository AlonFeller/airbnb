import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate, useLocation } from 'react-router-dom'
import { ExploreFilter } from '../cmps/explore-page/filter'
import { StayList } from '../cmps/explore-page/stay-list'


export function ExplorePage() {
    
    const navigate = useNavigate()
    const locationFromParams  = useLocation()
    const [location, setLocation] = useState(null)

    // useEffect(() => {
    //     setLocation(getLocation)
    // }, [])


    // const getLocation = () => {

    //     const urlParams = new URLSearchParams(locationFromParams.search);
    //     const location = urlParams.get('location') || '';
    //     return location
    // }

    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }


    return (
        <>
            <div className="explore-page">
                <ExploreFilter  />
                <StayList />
            </div>
        </>
    )
}