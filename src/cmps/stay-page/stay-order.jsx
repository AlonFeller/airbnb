import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as React from 'react';
import { AirBnbBtn } from '../order/AirBnb-Btn';
import BasicDateRangePicker from '../order/calander';
import { Guests } from '../order/guests';

import { addOrder } from '../../store/order/order.actions'

export const OrderNow = () => {
    const dispatch = useDispatch()
    const { selectedStay } = useSelector(storeState => storeState.stayModule)
    const { user } = useSelector(storeState => storeState.userModule)
    let isGuestPopupOn = true


    const onAddOrder = (selectedStay, user) => {
        dispatch(addOrder(selectedStay, user))
        console.log(selectedStay)
        console.log(user)
    }


    return (
        <section className='order-now'>

            <div className='calander'>
                <BasicDateRangePicker />
                <Guests />
            </div>
            <AirBnbBtn />
            <button onClick={() => onAddOrder(selectedStay, user)}>add order</button>
        </section >
    )
}



