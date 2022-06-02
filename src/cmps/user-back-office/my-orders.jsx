import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadOrders } from "../../store/order/order.actions";
import { userReducer } from "../../store/user/user.reducer";

export const MyOrders = (props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadOrders())
    }, [])
    const orders = useSelector((state => state.orderModule.orders))
    const user = useSelector((state => state.userModule.user))
    const hostOrders = orders.filter(order => order.host.id === user._id)

    // console.log('host orders', hostOrders);

    return (
        <section className="my-orders">
            <h1>My Stays orders</h1>

            <div className="order-list">

                {hostOrders.map(order => {

                    return <div className="order-preview" key={order.id}>
                        <div className="order-preview-buyer-img">
                            <h4>By: {order.buyer.name}</h4>
                            <img src='https://picsum.photos/200' alt="" className="review-user-img"/>
                        </div>
                        <h4>Guests count: {order.guestsNumber.total}</h4>
                        <h4>From: {order.checkIn.substring(0,10)}</h4>
                        <h4>Till: {order.checkOut.substring(0,10)}</h4>
                        <h4>Total: ${order.totalPrice}</h4>
                    </div>
                })}


            </div>
        </section>

    )
}