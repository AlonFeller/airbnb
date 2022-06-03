import React, { useEffect } from "react"
import { utilService } from "../../services/util.service"

export const StayAmenities = ({ amenities, isOpenAmenitiesModal }) => {
    useEffect(() => {
        if (isOpenAmenitiesModal) document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <section className="amenities-list-container">
            <ul className="amenities-list">
                {
                    amenities.map((amenity, index) => {
                        const amenityIcon = utilService.getAmenitiesIcons(amenity);
                        if (!amenityIcon) return
                        return <li className="amenity-container flex" key={amenity + index}>
                            <span className="amenity-icon">{amenityIcon}</span>
                            <h4>{amenity}</h4>
                        </li>
                    })

                }
            </ul>
        </section>
    )
}