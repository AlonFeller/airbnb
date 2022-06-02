import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadOrders } from "../../store/order/order.actions"
import { loadStays, loadStay } from "../../store/stay/stay.actions"
import { TripPreview } from "./my-trip-preview"

export const MyTrips = (props) => {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadOrders())
        dispatch(loadStays())
    }, [])

    const orders = useSelector((state => state.orderModule.orders))
    const user = useSelector((state => state.userModule.user))
    const stays = useSelector(state => state.stayModule.stays)
    const trips = orders.filter(order => order.buyer.id === user._id)

    // console.log('my trips', trips);

    const myTripsStays = trips.map(trip => {
        return stays.filter(stay => stay._id === trip.stay.id)
    })
    console.log('my trips stays', myTripsStays);

    return (
        <section className="backoffice-list-container">
            <h1>My trips</h1>

            <div className="backoffice-stay-list">

                {/* {
                    myTripsStays.map(stay => {
                        return <h1 key={stay._id}>{stay[0]._id}1</h1> 
                    })
                } */}
                {
                    myTripsStays.map(stay => {
                        return <TripPreview key={stay[0]._id} stay={stay[0]} /> 
                    })
                }


            </div>
        </section>

    )
}