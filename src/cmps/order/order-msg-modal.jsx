import React from "react"
import { moment } from 'moment'


export const OrderMsgModal = ({ currOrder }) => {

    console.log(currOrder)

    return (
        <section className="order-modal">
            <h4>Your order complete successfully</h4>
            <p className="order-stay-name">{currOrder.stay.name}</p>
            <p className="order-details">Details:</p>
            {/* <p>Check in:{currOrder.checkIn}</p>
            <p>Check out:{currOrder.checkOut}</p> */}
            <p className="order-guests">Guests:
                {currOrder.guestsNumber.adults && <span>adults:{currOrder.guestsNumber.adults}</span>}
                {currOrder.guestsNumber.childern ? <span>childern:{currOrder.guestsNumber.childern}</span> : null}
                {currOrder.guestsNumber.pets ? <span>pets:{currOrder.guestsNumber.pets}</span> : null}
                <span className="order-guests-total">total:{currOrder.guestsNumber.total}</span>
            </p>
            <p className="order-total-price">Total price:{currOrder.totalPrice}</p>
            <p className="order-added-msg">The order is added to your area</p>
            {/* <p>Time order:{}</p> */}
        </section>
    )
}