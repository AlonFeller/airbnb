
import * as React from 'react';
import { AirBnbBtn } from '../order/AirBnb-Btn';
import BasicDateRangePicker from '../order/calander';
import { Guests } from '../order/guests';

export const OrderNow = (props) => {

    let isGuestPopupOn = true



    return (
        <section className='order-now'>

            <div className='calander'>
                <BasicDateRangePicker />
                <Guests />
            </div>
            <AirBnbBtn />
        </section>
    )
}



