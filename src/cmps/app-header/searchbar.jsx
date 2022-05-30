import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { loadStays, setFilter } from "../../store/stay/stay.actions"
import { MyDatePicker } from "./date-picker"
import btn from "../../assets/Images/srchbtn.png"
import BasicDateRangePicker from "../order/calander"

export const Searchbar = (props, searchBarTabs, handleSearchBarTabs) => {
    console.log('for alon')
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

    useEffect(() => {
        window.addEventListener("scroll", handleSearchBarTabs)
        return () => {
            window.removeEventListener("scroll", handleSearchBarTabs)
        }
    }, []);

    function updateHeaderActiveTab(elName, ev) {
        ev?.stopPropagation();
        ev?.preventDefault();
        if (elName === "location" && searchBarTabs !== elName) {
            setIsScreenOpen(true);
            elLocationInput.current.focus();
        } else elLocationInput.current.blur();
        // elName === "check-in" || elName === "check-out" ? setIsScreenOpen(true) : setIsScreenOpen(false);
        setIsScreenOpen(elName === "check-in" || elName === "check-out");
        if (searchBarTabs === elName) {
            setSearchBarTabsActive(null);
            setIsScreenOpen(false);
        } else {
            setSearchBarTabsActive(elName);
            setIsScreenOpen(true);
        }
    }

    const deployUrl = (location) => {
        navigate(`/explore/?location=${location}`)
    }

    return (
        <section className={"searchbar-contianer"+((fullHeader)?"fullHeader":"")} onScroll={fullHeader=!fullHeader}>
            <section className="searchbar">
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
