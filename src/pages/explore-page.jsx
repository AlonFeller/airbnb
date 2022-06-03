import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Link, Switch, useNavigate, useLocation } from 'react-router-dom'
import { toggleIsExplore, toggleHeaderIsTop, toggleHeaderIsActive, toggleIsStay } from "../store/header/header.action";
import { ExploreFilter } from '../cmps/explore-page/filter'
import { StayList } from '../cmps/explore-page/stay-list'
import { useDispatch } from 'react-redux';

export function ExplorePage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const locationFromParams = useLocation()
    const [location, setLocation] = useState(null)

    const goTo = (path) => {
        navigate('/')
        navigate(path)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(toggleIsExplore(true))
        return () => {
            dispatch(toggleIsExplore(false))}
        
    }, []);


    return (
        <>
            <div className="explore-page">
                <ExploreFilter />
                <StayList />
            </div>
        </>
    )
}