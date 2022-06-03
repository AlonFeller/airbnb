import React from "react"
import { useSelector } from 'react-redux'

export const OrderMsgModal = () => {

    const { orders } = useSelector(storeState => storeState.orderModule)

    const currOrder = orders[orders.length - 1]

    return (
        <section className="order-modal">
            <h4>Your order complete successfully</h4>
            <p>{currOrder?.priceForDay}</p>
            {/* TODO: COMPLETE TEXT */}
        </section>
    )
}