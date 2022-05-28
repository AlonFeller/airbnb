import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams} from "react-router-dom"
import { loadStays, setFilter } from "../../store/stay/stay.actions"
import { MyDatePicker } from "./date-picker"

export const Searchbar = (props) => {

    const navigate = useNavigate()
    const filterBy = useSelector(state => state.stayModule.filterBy)
    const dispatch = useDispatch() 
    const params = useParams()
    const {location} = params
    
    
    useEffect(() => {
        // filterBy.location = location
        // console.log('params', location);

        dispatch(setFilter(filterBy))
        dispatch(loadStays(filterBy))
    }, [params])
    
    const onHandleChange = ({target}) => {
        filterBy.location = target.value
        dispatch(setFilter(filterBy))
        dispatch(loadStays(filterBy))
        deployUrl(filterBy.location)
    }
        
    const deployUrl = (location) => {  
        const urlSrcPrm = new URLSearchParams(location)
        const searchStr = urlSrcPrm.toString()
        navigate(`/explore/${searchStr}`)
    }

    return (
        <section className='searchbar'>

            <form action="" className="searchbar-form">

                <div className="searchber-form-label">
                    <label htmlFor="">Location </label>
                    <input type="text" name="location" placeholder="Anywhere"  onChange={onHandleChange}/>
                </div>
                <div className="searchber-form-label">
                    <label htmlFor="">Check in</label>
                    <MyDatePicker/>
                </div>
                <div className="searchber-form-label">
                    <label htmlFor="">Check out</label>
                    <MyDatePicker/>
                </div>
                <div className="searchber-form-label">
                    <label htmlFor="">Who</label>
                    <input type="number" placeholder="Guests" />
                </div>

                

            </form>
        </section>
    )

}
