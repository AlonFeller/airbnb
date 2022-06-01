import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react';
import { AirBnbBtn } from '../order/AirBnb-Btn'
import BasicDateRangePicker from '../order/order-calander'
import { Guests } from '../order/order-guests'
import { orderService } from '../../services/order.service'
import { addOrder } from '../../store/order/order.actions'
import { Star } from "@mui/icons-material"
import { priceDetails } from '../order/price-details'

export const OrderNow = () => {
    const dispatch = useDispatch()
    const { selectedStay } = useSelector(storeState => storeState.stayModule)
    const { user } = useSelector(storeState => storeState.userModule)
    const [dates, setDates] = useState()
    const [guests, setGuests] = useState()
    const [nights, setNight] = useState()
    let isGuestPopupOn = true

    const onGetOrderDates = (currDates) => {
        setDates(currDates)
        const nightsOrder = getTotalNights(currDates[0], currDates[1])
        setNight(nightsOrder)
    }

    const onGetGuestsNumber = (currGuests) => {
        setGuests(currGuests)
    }

    const onGetOrder = (selectedStay, user) => {
        const newOrder = orderService.add(selectedStay, user, guests, dates, nights)
        console.log(newOrder)
        onAddOrder(newOrder)
    }

    function getTotalNights(checkIn, checkOut) {
        return (checkOut - checkIn) / (1000 * 60 * 60 * 24);
    }

    const onAddOrder = (order) => {
        dispatch(addOrder(order))
    }

    return (
        <section className="order-now">
            <div className='order-form-header'>
                <p>
                    <span className='cost'>${selectedStay.price}</span> / night
                </p>
                <p>
                    <span>< Star /></span>
                    <span className='avg-checkout'> {selectedStay.reviewScores.rating / 20} · </span>
                    <span className='reviews'>{selectedStay.numOfReviews} reviews</span>
                </p>
            </div>
            <div className="order-calander">
                <BasicDateRangePicker onGetOrderDates={onGetOrderDates} />
                <Guests onGetGuestsNumber={onGetGuestsNumber} />
            </div>
            <AirBnbBtn onGetOrder={onGetOrder} user={user} selectedStay={selectedStay} />
            <priceDetails selectedStay={selectedStay} nights={nights}/>
        </section >
    )
}



