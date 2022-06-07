import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { loadStays, setFilter } from "../../store/stay/stay.actions"
import { MyDatePicker } from "./date-picker"
import btn from "../../assets/Images/srchbtn.png"
import { headerIsLong, toggleIsStay } from "../../store/header/header.action"

export const Searchbar = (props) => {
    const { isPageScroll, isExplore } = props
    const navigate = useNavigate()
    const filterBy = useSelector(state => state.stayModule.filterBy)
    const dispatch = useDispatch()
    const params = useParams()
    const locationFromParams = useLocation()
    const urlParams = new URLSearchParams(locationFromParams.search);
    const location = urlParams.get('location') || '';
    const { isLong } = useSelector(state => state.headerModule.headerMode)


    const setLongHeader = () => {
        dispatch(headerIsLong(true))
    }

    const onHandleChange = ({ target }) => {
        filterBy.location = target.value
        dispatch(setFilter(filterBy))
    }

    const getFilteredStays = (ev) => {
        ev.preventDefault()
        console.log('searching....');
        dispatch(loadStays(filterBy))
        deployUrl(filterBy.location)
    }

    const deployUrl = (location) => {
        navigate(`/explore/?location=${location}`)
    }

    const ShortSearchBar = () => <section className="searchbar-fullHeaderOn" onClick={setLongHeader}>
        <div className="short-searchbar" >
            {(location.length) ? <h1>{location}</h1> : <h1>Start your search</h1>}

            <div className="srchbtn"><img src={btn} alt="btn" /></div>
        </div>
    </section >

    const LongSearchBar = () => <section className="long-searchbar ">
        <form action="" className="searchbar-form" onSubmit={(event) => getFilteredStays(event)}>
            <div className="searchber-form-label location bold">
                <label htmlFor="">Location </label>
                {(location) ?
                    <input type="text" autoFocus name="location" placeholder="Anywhere" value={location} onChange={onHandleChange} /> :
                    <input type="text" autoFocus name="location" placeholder="Anywhere" onChange={onHandleChange} />
                }
            </div>
            <div className="searchber-form-label bold CheckIn">
                <label htmlFor="">Check in </label>
                <MyDatePicker className="date" />
            </div>
            <div className="searchber-form-label bold CheckOut">
                <label htmlFor="">Check out</label>
                <MyDatePicker className="date" />
            </div>
            <div className="searchber-form-label bold Guests">
                <label htmlFor="">How many</label>
                <input type="number" placeholder="Guests" />
            </div>
            <div className="srchbtn" onClick={(event) => getFilteredStays(event)}><img src={btn} alt="btn" /></div>
        </form>
    </section>

    const searchbarContainerClass = (isExplore || !isPageScroll) ? "searchbar-container " : "searchbar-container "
  

    return (
        <section className={searchbarContainerClass}>
            {isLong ? <LongSearchBar /> : <ShortSearchBar />}
        </section>
    )
}

