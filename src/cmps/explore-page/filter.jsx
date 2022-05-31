import { Slider } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { loadStays, setFilter } from "../../store/stay/stay.actions"

export const ExploreFilter = (props) => {

    
    const locationFromParams  = useLocation()
    const stays = useSelector(state => state.stayModule.stays)
    let filterBy = useSelector(state => state.stayModule.filterBy)
    const dispatch = useDispatch()
    const [val, setVal] = useState([0, 2000])

    useEffect(() => {
            const newFilter = {...filterBy}
            const urlParams = new URLSearchParams(locationFromParams.search);
            newFilter.location = urlParams.get('location') || '';
            dispatch(setFilter(newFilter))
            dispatch(loadStays(newFilter))
    }, [])

    const [kitchen, setKitchen] = useState(false)
    const [wifi, setWifi] = useState(false)
    const [TV, setTV] = useState(false)
    const [AC, setAC] = useState(false)
    const [pet, setPet] = useState(false)
    const [smoking, setSmoking] = useState(false)

    const handleRangeChange = (ev, data) => {
        setVal(data)
        setTimeout(() => {
            filterBy = { ...filterBy, minPrice: data[0], maxPrice: data[1] }
            dispatch(setFilter(filterBy))
        }, 200)
        dispatch(loadStays(filterBy))
    }

    const setTag = (tag, isSelected) => {

        (!isSelected) ? filterBy.tags.push(tag) :
            filterBy.tags.splice(filterBy.tags.indexOf(tag), 1)

        dispatch(setFilter(filterBy))
        dispatch(loadStays(filterBy))
    }

    const addTagToFilter = (tag) => {
        console.log('adding ' + tag + ' to filter');

        switch (tag) {
            case 'Wifi':
                setWifi(!wifi)
                setTag('Wifi', wifi)
                break
            case 'TV':
                setTV(!TV)
                setTag('TV', TV)
                break
            case 'AC':
                setAC(!AC)
                setTag('Air conditioning', AC)
                break
            case 'Kitchen':
                setKitchen(!kitchen)
                setTag('Kitchen', kitchen)
                break
            case 'Pet':
                setPet(!pet)
                setTag('Pets allowed', pet)
                break
            case 'Smoking':
                setSmoking(!smoking)
                setTag('Smoking allowed', smoking)
                break
            default:
        }
    }




    return (
        <section className='explore-filter'>

            <div className="slider-container">
                <label htmlFor="">Price range</label>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    min={0}
                    max={2000}
                    valueLabelDisplay="auto"
                    value={val}
                    onChange={handleRangeChange}
                />
            </div>
            <section className="filter-btns">
                {/* <div className="filter-form-label1">
                    <label htmlFor="">Min price </label>
                    <input type="number" name="minPrice" placeholder="Min price" onChange={onHandleChange} />
                    </div>
                    <div className="filter-form-label2">
                    <label htmlFor="">Max price</label>
                    <input type="number" name="maxPrice" placeholder="Max price" onChange={onHandleChange} />
                </div> */}
                <div className={(kitchen) ? "filter-label-btn-on" : "filter-label-btn"} onClick={() => addTagToFilter('Kitchen')}><span>Kitchen</span></div>
                <div className={(wifi) ? "filter-label-btn-on" : "filter-label-btn"} onClick={() => addTagToFilter('Wifi')}><span>Wifi</span></div>
                <div className={(TV) ? "filter-label-btn-on" : "filter-label-btn"} onClick={() => addTagToFilter('TV')}><span>TV</span></div>
                <div className={(AC) ? "filter-label-btn-on" : "filter-label-btn"} onClick={() => addTagToFilter('AC')}><span>AC</span></div>
                <div className={(pet) ? "filter-label-btn-on" : "filter-label-btn"} onClick={() => addTagToFilter('Pet')}><span>Pets Allowed</span></div>
                <div className={(smoking) ? "filter-label-btn-on" : "filter-label-btn"} onClick={() => addTagToFilter('Smoking')}><span>Smoking</span></div>
            </section>
            <h3>{stays.length + ' stays'}</h3>


        </section>
    )

}
