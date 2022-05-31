import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as React from 'react';
import { AirBnbBtn } from '../order/AirBnb-Btn';
import BasicDateRangePicker from '../order/calander';
import { Guests } from '../order/guests';
import { orderService } from '../../services/order.service'

import { addOrder } from '../../store/order/order.actions'

export const OrderNow = () => {
    const dispatch = useDispatch()
    const { selectedStay } = useSelector(storeState => storeState.stayModule)
    const { user } = useSelector(storeState => storeState.userModule)
    let isGuestPopupOn = true


    const onGetOrder = (selectedStay, user) => {
        const newOrder = orderService.add(selectedStay, user)
        onAddOrder(newOrder)
    }

    const onAddOrder = (order) => {
        dispatch(addOrder(order))
        console.log(order)
    }


    return (
        <section className='order-now'>

            <div className='calander'>
                <BasicDateRangePicker />
                <Guests />
            </div>
            <AirBnbBtn  onGetOrder={onGetOrder} user={user} selectedStay={selectedStay}/>
            <button onClick={() => onGetOrder(selectedStay, user)}>add order</button>
        </section >
    )
}



