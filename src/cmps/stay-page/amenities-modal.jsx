import React from "react"
import { StayAmenities } from "./stay-amenities"

export const AmenitiesModal = ({ stay, setIsOpenModal }) => {


    return (
        <section className="amenities-modal">
            <div className="modal-header">
                <span onClick={() => { console.log('message'); setIsOpenModal(false) }}>X</span>
            </div>
            <StayAmenities key="stay-amenities" amenities={stay.amenities} stay={stay} />
        </section>
    )
}