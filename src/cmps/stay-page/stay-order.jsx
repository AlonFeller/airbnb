import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import * as React from 'react';
import { AirBnbBtn } from '../order/AirBnb-Btn';
import BasicDateRangePicker from '../order/calander';
import { Guests } from '../order/guests';

import { addOrder } from '../../store/order/order.actions'

export const OrderNow = (props) => {
    // const dispatch = useDispatch()
    let isGuestPopupOn = true

    // useEffect(() => {
    //     setOrder(newOrder)
    // }, [])

    // const newOrder = 'order-test'

    // const setOrder = (order) => {
    //     dispatch(addOrder(order))
    //     console.log(order)
    // }


    return (
        <section className='order-now'>

            <div className='calander'>
                <BasicDateRangePicker />
                <Guests />
            </div>
            <AirBnbBtn/>
        </section>
    )
}



