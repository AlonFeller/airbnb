import React from "react"
import { StayAmenities } from './stay-amenities'
import { OrderNow } from "./stay-order"

export const StayDetails = ({ stay }) => {

    return (
        <section className="stay-details">
            <div className="stay-details-info">
                <section className="stay-details-shortly gray-box-shadow">
                    <h2>{stay.roomType} hosted by {stay.host.fullname}</h2>
                    {/* <img src={stay.host.pictureUrl} alt="" /> */}
                    <h4>{stay.capacity} guests ·
                        {stay.bedrooms} bedrooms ·
                        {stay.beds} beds ·
                        {stay.bathrooms} baths
                    </h4>
                </section>
                <section className="stay-more-features gray-box-shadow">
                    this is not exict in the data file
                </section>
                <section className="stay-details-summery gray-box-shadow">
                    <h2> Stay Description</h2>
                    {stay.summary}
                </section>
                <section className="stay-details-amenities gray-box-shadow">
                    <h2>What this place offers</h2>
                    <StayAmenities key="stay-amenities" stay={stay} />
                </section>

            </div>
            <div className="stay-details-order">
                    <OrderNow/>
            </div>
        </section>
    )
}

