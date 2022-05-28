import { useDispatch, useSelector } from "react-redux"
import { loadStays, setFilter } from "../../store/stay/stay.actions"
import { MyDatePicker } from "./date-picker"

export const Searchbar = (props) => {


    const filterBy = useSelector(state => state.stayModule.filterBy) 


    const dispatch = useDispatch() 
    const onHandleChange = ({target}) => {
        filterBy.location = target.value
        dispatch(setFilter(filterBy))
        dispatch(loadStays(filterBy))
        
    }
        


    

    return (
        <section className='searchbar'>

            <form action="" className="searchbar-form">

                <div className="searchber-form-label">
                    <label htmlFor="">Location </label>
                    <input type="text" name="location" placeholder="Anywhere" onChange={onHandleChange}/>
                </div>
                <div className="searchber-form-label">
                    <label htmlFor="">Check in</label>
                    <MyDatePicker className="date"/>
                </div>
                <div className="searchber-form-label">
                    <label htmlFor="">Check out</label>
                    <MyDatePicker className="date"/>
                </div>
                <div className="searchber-form-label">
                    <label htmlFor="">Who</label>
                    <input type="number" placeholder="Guests" />
                </div>

                

            </form>
        </section>
    )

}
