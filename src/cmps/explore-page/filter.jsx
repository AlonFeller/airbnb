import { Slider } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { loadStays, setFilter } from "../../store/stay/stay.actions"
import { utilService } from "../../services/util.service"
import debounce from "lodash.debounce"

export const ExploreFilter = (props) => {


    const locationFromParams = useLocation()
    const stays = useSelector(state => state.stayModule.stays)
    let filterBy = useSelector(state => state.stayModule.filterBy)
    const dispatch = useDispatch()
    const [val, setVal] = useState([0, 2000])

    useEffect(() => {
        const newFilter = { ...filterBy }
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
    const [isPriceOn, setIsPriceOn] = useState(false);

    
    const handleRangeChange = (ev, data) => {
        setVal(data)
        filterBy = { ...filterBy, minPrice: data[0], maxPrice: data[1] }
        dispatch(setFilter(filterBy))
        dispatch(loadStays(filterBy))
    }
    const debounceRange = debounce(handleRangeChange, 20)

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
            case 'isPriceOn':
                setIsPriceOn(!isPriceOn)
                break
            default:
        }
    }

    return (
        <section className='explore-filter'>
            <section className="filters-container">
                <section className="filter-btns">
                    <div className={(isPriceOn) ? "filter-label-btn-on" : "filter-label-btn"} onClick={() => addTagToFilter('isPriceOn')}><span>Price</span></div>
                    {(isPriceOn) ? <div className="slider-container">
                        <label htmlFor="">Price range</label>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            min={0}
                            max={2000}
                            valueLabelDisplay="auto"
                            value={val}
                            onChange={debounceRange}
                        />
                        <div className="price-range flex">
                            <div className="minmax-price">
                                <div className="min-price">Min Price</div>
                                <div className="min-price">${utilService.numberWithCommas(val[0])}</div>
                            </div>
                            <div className="minmax-price">
                                <div className="max-price">Max Price </div>
                                <div className="max-price">${utilService.numberWithCommas(val[1])}</div>
                            </div>
                        </div>
                    </div> : null}
                    <div className={(kitchen) ? "filter-label-btn-on" : "filter-label-btn"} onClick={() => addTagToFilter('Kitchen')}><span>Kitchen</span></div>
                    <div className={(wifi) ? "filter-label-btn-on" : "filter-label-btn"} onClick={() => addTagToFilter('Wifi')}><span>Wifi</span></div>
                    <div className={(TV) ? "filter-label-btn-on" : "filter-label-btn"} onClick={() => addTagToFilter('TV')}><span>TV</span></div>
                    <div className={(AC) ? "filter-label-btn-on" : "filter-label-btn"} onClick={() => addTagToFilter('AC')}><span>AC</span></div>
                    <div className={(pet) ? "filter-label-btn-on" : "filter-label-btn"} onClick={() => addTagToFilter('Pet')}><span>Pets Allowed</span></div>
                    <div className={(smoking) ? "filter-label-btn-on" : "filter-label-btn"} onClick={() => addTagToFilter('Smoking')}><span>Smoking</span></div>
                </section>
            </section>
            <h3>{stays.length + ' Results'}</h3>


        </section>
    )

}
