import React from "react"
import {utilService} from "../../services/util.service"

export const StayAmenities = ({ stay }) => {


    return (
        <ul className="amenities-list">
            {
                stay.amenities.map((amenity, index) => {

                    // const amenityIcon = utilService.getAmenitiesIcons(amenity);

                        <li className="amenity-container flex" key={amenity + index}>
                            {/* <span className="amenity-icon">{amenityIcon}</span> */}
                            <span className="amenity-icon">###</span>
                            <h4>{amenity}</h4>
                        </li>
                })

            }
        </ul>
    )
}