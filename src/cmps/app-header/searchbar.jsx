import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { loadStays, setFilter } from "../../store/stay/stay.actions"
import { MyDatePicker } from "./date-picker"
import btn from "../../assets/Images/srchbtn.png"
import BasicDateRangePicker from "../order/calander"

export const Searchbar = (props) => {
    console.log('for alon')
    const navigate = useNavigate()
    const filterBy = useSelector(state => state.stayModule.filterBy)
    const dispatch = useDispatch()
    const params = useParams()
    const locationFromParams = useLocation()
    const urlParams = new URLSearchParams(locationFromParams.search);
    const location = urlParams.get('location') || '';


    // useEffect(() => {
    //     if (location) {
    //         filterBy.location = location
    //         // dispatch(setFilter(filterBy))
    //         // dispatch(loadStays(filterBy))
    //         onHandleChange({target:{value: location}})
    //     }
    // }, [params])

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
        <section className='searchbar-contianer'>

            <section className='searchbar'>

                <form action="" className="searchbar-form">

                    <div className="searchber-form-label location">
                        <label htmlFor="">Location </label>
                        <input type="text" name="location" placeholder="Anywhere" value={location} onChange={onHandleChange} />
                    </div>
                    <div className="searchber-form-label">
                        {/* <div className="labels-flex"> */}
                        {/* &nbsp; &nbsp; &nbsp; &nbsp; 
                    <label htmlFor="">Check Out</label> */}
                        {/* </div> */}
                        <label htmlFor="">Check in </label>
                        <MyDatePicker className="date" />
                        {/* <BasicDateRangePicker/> */}
                    </div>
                    <div className="searchber-form-label">
                        <label htmlFor="">Check out</label>
                        <MyDatePicker className="date" />
                        {/* <BasicDateRangePicker/> */}
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
