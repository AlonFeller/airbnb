import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { loadStays, setFilter } from "../../store/stay/stay.actions"
import { MyDatePicker } from "./date-picker"
import btn from "../../assets/Images/srchbtn.png"
import BasicDateRangePicker from "../order/order-calander"
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
    const { isStay, isLong } = useSelector(state => state.headerModule.headerMode)


    const setLongHeader = () => {
        dispatch(headerIsLong(true))
    }

    const onHandleChange = ({ target }) => {
        filterBy.location = target.value
        dispatch(setFilter(filterBy))
        dispatch(loadStays(filterBy))
        console.log('filter', filterBy);
        if (location != target.value) deployUrl(filterBy.location)
    }

    // const isSearchBarLong = () => {
    //     let activeBar = true
    //     if((isStay) activeBar = false
    // }

    const deployUrl = (location) => {
        navigate(`/explore/?location=${location}`)
    }

    const ShortSearchBar = () => <section className="searchbar-fullHeaderOn" onClick={setLongHeader}> 
        <div className="short-searchbar" >
            <h1>Start your search</h1>
            <div className="srchbtn"><img src={btn} alt="btn" /></div>
        </div>
    </section >

    const LongSearchBar = () => <section className="long-searchbar ">
        <form action="" className="searchbar-form">
            <div className="searchber-form-label location bold">
                <label htmlFor="">Location </label>
                <input type="text" name="location" placeholder="Anywhere" value={location} onChange={onHandleChange} />
            </div>
            <div className="searchber-form-label bold">
                <label htmlFor="">Check in </label>
                <MyDatePicker className="date" />
            </div>
            <div className="searchber-form-label bold">
                <label htmlFor="">Check out</label>
                <MyDatePicker className="date" />
            </div>
            <div className="searchber-form-label bold">
                <label htmlFor="">How many</label>
                <input type="number" placeholder="Guests" />
            </div>
            <div className="srchbtn"><img src={btn} alt="btn" /></div>
        </form>
    </section>

    const searchbarContainerClass = (isExplore || !isPageScroll)?"searchbar-container ":"searchbar-container "
    // const searchbarContainerClass = (isStay || isPageScroll) ? "searchbar-container short-searchbar" : "searchbar-container "


    return (
        <section className={searchbarContainerClass}>
            {/* {(isStay || isPageScroll) && <ShortSearchBar />} */}
            {isLong ? <LongSearchBar /> : <ShortSearchBar />}
        </section>
    )
}

