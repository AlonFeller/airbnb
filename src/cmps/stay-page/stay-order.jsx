import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react';
import { AirBnbBtn } from '../order/AirBnb-Btn';
import BasicDateRangePicker from '../order/order-calander';
import { Guests } from '../order/order-guests';
import { orderService } from '../../services/order.service'
import { addOrder } from '../../store/order/order.actions'

export const OrderNow = () => {
    const dispatch = useDispatch()
    const { selectedStay } = useSelector(storeState => storeState.stayModule)
    const { user } = useSelector(storeState => storeState.userModule)
    const [dates, setDates] = useState()
    const [guests, setGuests] = useState()
    let isGuestPopupOn = true

    const onGetOrderDates = (currDates) => {
        setDates(currDates)
    }

    const onGetGuestsNumber = (currGuest) => {
        setGuests(currGuest)
    }

    const onGetOrder = (selectedStay, user) => {
        if (dates.length !== 2 || !dates[1]) return
        const nights = getTotalNights(dates[0], dates[1])
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
            
            <div className="order-calander">
                <BasicDateRangePicker onGetOrderDates={onGetOrderDates} />
                <Guests onGetGuestsNumber={onGetGuestsNumber} />
            </div>
            <AirBnbBtn onGetOrder={onGetOrder} user={user} selectedStay={selectedStay} />
            <div className=""></div>
        </section >
    )
}



