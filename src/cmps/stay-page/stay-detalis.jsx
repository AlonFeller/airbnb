import React from "react"
import { StayAmenities } from './stay-amenities'

export const StayDetails = ({ stay }) => {

    return (
        <section className="stay-details">
            <div className="stay-details-info">
                <section className="stay-details-shortly">
                    <h2>{stay.roomType} hosted by {stay.host.fullname}</h2>
                    {/* <img src={stay.host.pictureUrl} alt="" /> */}
                    <h4>{stay.capacity} guests ·
                        {stay.bedrooms} bedrooms ·
                        {stay.beds} beds ·
                        {stay.bathrooms} baths
                    </h4>
                </section>
                <hr />
                <section className="stay-more-features">
                    this is not exict in the data file
                </section>
                <hr />
                <section className="stay-details-summery">
                    <h2> Stay Description</h2>
                    {stay.summary}
                </section>
                <hr />
                <section className="stay-details-amenities">
                    <h2>What this place offers</h2>
                    <StayAmenities key="stay-amenities" stay={stay} />
                    <hr />
                </section>

            </div>
            <div className="stay-details-order">

            </div>
        </section>
    )
}

