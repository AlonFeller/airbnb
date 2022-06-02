import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { loadStays, setFilter } from "../../store/stay/stay.actions"
import { MyDatePicker } from "./date-picker"
import btn from "../../assets/Images/srchbtn.png"
import BasicDateRangePicker from "../order/order-calander"
import { toggleIsStay } from "../../store/header/header.action"

export const Searchbar = (props) => {
    const { isPageScroll, isExplore } = props
    const navigate = useNavigate()
    const filterBy = useSelector(state => state.stayModule.filterBy)
    const dispatch = useDispatch()
    const params = useParams()
    const locationFromParams = useLocation()
    const urlParams = new URLSearchParams(locationFromParams.search);
    const location = urlParams.get('location') || '';
    const { isStay } = useSelector(state => state.headerModule.headerMode)

    const toggleIsState = () => {
        dispatch(toggleIsStay(!isStay))
    }
    const onHandleChange = ({ target }) => {
        filterBy.location = target.value
        dispatch(setFilter(filterBy))
        dispatch(loadStays(filterBy))
        console.log('filter', filterBy);
        if (location != target.value) deployUrl(filterBy.location)
    }

    const deployUrl = (location) => {
        navigate(`/explore/?location=${location}`)
    }
    console.log(isStay);

    return (
        <section className={(isStay||isPageScroll) ? "searchbar-container short-searchbar" : "searchbar-container "}>
            {(isStay||isPageScroll) ? <section className={(isPageScroll) ? "searchbar-fullHeaderOn " : "searchbar "}>
                <div className="short-searchbar" onClick={toggleIsState} >
                    <h1>Start your search</h1>
                    <div className="srchbtn"><img src={btn} alt="btn" /></div>
                </div>
            </section> : <section className={(isPageScroll || isExplore) ? "searchbar-fullHeaderOn" : "searchbar"}>
                <form action="" className="searchbar-form">

                    <div className="searchber-form-label location">
                        <label htmlFor="">Location </label>
                        <input type="text" name="location" placeholder="Anywhere" value={location} onChange={onHandleChange} />
                    </div>
                    <div className="searchber-form-label">
                        <label htmlFor="">Check in </label>
                        <MyDatePicker className="date" />
                    </div>
                    <div className="searchber-form-label">
                        <label htmlFor="">Check out</label>
                        <MyDatePicker className="date" />
                    </div>
                    <div className="searchber-form-label">
                        <label htmlFor="">How many</label>
                        <input type="number" placeholder="Guests" />
                    </div>
                    <div className="srchbtn"><img src={btn} alt="btn" /></div>
                </form>
            </section>}
        </section>
    )

}
