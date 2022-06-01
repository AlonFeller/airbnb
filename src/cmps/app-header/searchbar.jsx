import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { loadStays, setFilter } from "../../store/stay/stay.actions"
import { MyDatePicker } from "./date-picker"
import btn from "../../assets/Images/srchbtn.png"
import BasicDateRangePicker from "../order/order-calander"

export const Searchbar = (props) => {
    const {isPageScroll, isExplore} = props
    // console.log("isPageScroll",isPageScroll);
    const navigate = useNavigate()
    const filterBy = useSelector(state => state.stayModule.filterBy)
    const dispatch = useDispatch()
    const params = useParams()
    const locationFromParams = useLocation()
    const urlParams = new URLSearchParams(locationFromParams.search);
    const location = urlParams.get('location') || '';
    let fullHeader = false;

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

    return (
        <section className={"searchbar-container " }>
            <section className={(isPageScroll||isExplore) ? "searchbar-fullHeaderOn" : "searchbar"}>
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
            </section>
        </section>
    )

}
