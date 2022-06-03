import React, { useEffect } from "react"
import { StayAmenities } from "./stay-amenities"

export const AmenitiesModal = ({ stay, isOpenAmenitiesModal, setIsOpenAmenitiesModal, modalPosition }) => {
    useEffect(() => {
        if (isOpenAmenitiesModal) document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <section className="amenities-modal" style={{top: modalPosition +"px"}}>
            <div className="modal-header">
                <span onClick={() => { setIsOpenAmenitiesModal(false) }}>⨯</span>
            </div>
            <section className="amenities-modal-container" >
                <StayAmenities key="stay-amenities" amenities={stay.amenities} isOpenAmenitiesModal={isOpenAmenitiesModal} stay={stay} />
            </section>
        </section>
    )
}