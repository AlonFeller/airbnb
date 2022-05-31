import React from "react"
import { StayReviews } from "./stay-reviews"

export const AmenitiesModal = ({ stay, setIsOpenModal }) => {


    return (
        <section>
            <span onClick={() => { console.log('message'); setIsOpenModal(false) }}>X</span>
            <ul className="amenities-list">
                {
                    stay.amenities.map((amenity, index) => {
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
        </section>
    )
}