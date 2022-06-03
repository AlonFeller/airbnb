import React from 'react'

export const PriceDetails = ({ selectedStay, nights }) => {

    return (
        <section className="price-details-container flex">
            <div className="gray-box-shadow">
                <div className="price-details  flex">
                    <div>
                        ${selectedStay.price} X {nights} nights:
                    </div>
                    <div className="nights-price">${(nights * selectedStay.price).toFixed()}</div>
                </div>
                <div className="service-fees  flex">
                    <div className="service">Service fee:</div>
                    <div className="service-price">${(nights * selectedStay.price * 0.025).toFixed()}</div>
                </div>
            </div>
            <div className="total-price  flex">
                <h3> Total price:</h3>
                <h3>${(nights * selectedStay.price * 1.025).toFixed()}</h3>
            </div>
        </section>
    )
}
