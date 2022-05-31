import React from "react"
import { utilService } from "../../services/util.service"

export const StayAmenities = ({ stay,amenities }) => {


    return (
        <ul className="amenities-list">
            {
                amenities.map((amenity, index) => {
                    const amenityIcon = utilService.getAmenitiesIcons(amenity);
                    if (!amenityIcon) return
                    return <li className="amenity-container flex" key={amenity + index}>
                        <span className="amenity-icon">{amenityIcon}</span>
                        {/* <span className="amenity-icon">###</span> */}
                        <h4>{amenity}</h4>
                    </li>
                })

            }
        </ul>
    )
}