import React, { useEffect } from "react"
import { StayAmenities } from "./stay-amenities"

export const AmenitiesModal = ({ stay, isOpenAmenitiesModal,setIsOpenAmenitiesModal }) => {
    useEffect(() => {
        if (isOpenAmenitiesModal) document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);
    
    return (
        <section className="amenities-modal">
            <div className="modal-header">
                <span onClick={() => { setIsOpenAmenitiesModal(false) }}>X</span>
            </div>
            <StayAmenities key="stay-amenities" amenities={stay.amenities} isOpenAmenitiesModal={isOpenAmenitiesModal} stay={stay} />
        </section>
    )
}