import React from "react"

export const StayAmenities = ({ stay }) => {

    return (
        <ul className="amenities-list">
            {
                stay.amenities.map((amenity, index) =>
                    <li className="amenity-container flex" key={amenity + index}>
                        <span className="amenity-icon">**put icon**</span>
                        <h4>{amenity}</h4>
                    </li>)
            }
        </ul>
    )
}