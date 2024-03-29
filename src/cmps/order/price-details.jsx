import React from 'react'
import {utilService} from '../../services/util.service'

export const PriceDetails = ({ selectedStay, nights }) => {

    return (
        <section className="price-details-container flex">
                <h5>You won't be charged yet</h5>
            <div className="gray-box-shadow">
                <div className="price-details  flex">
                    <div>
                        <u> ${utilService.numberWithCommas(selectedStay.price)} X {nights} nights:</u>
                    </div>
                    <div className="nights-price">${utilService.numberWithCommas((nights * selectedStay.price).toFixed())}</div>
                </div>
                <div className="service-fees  flex">
                    <div className="service"><u>Service fee:</u></div>
                    <div className="service-price">${(nights * selectedStay.price * 0.025).toFixed()}</div>
                </div>
            </div>
            <div className="total-price  flex">
                <h3> Total</h3>
                <h3>${utilService.numberWithCommas((nights * selectedStay.price * 1.025).toFixed())}</h3>
            </div>
        </section>
    )
}
