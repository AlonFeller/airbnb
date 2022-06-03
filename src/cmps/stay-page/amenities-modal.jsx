import React, { useEffect } from "react"
import { useSelector } from "react-redux";
import { StayAmenities } from "./stay-amenities"

export const AmenitiesModal = ({ stay, isOpenAmenitiesModal, setIsOpenAmenitiesModal }) => {
    const { modalPosition } = useSelector(state => state.headerModule.headerMode)
    useEffect(() => {
        if (isOpenAmenitiesModal) document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <section className="amenities-modal" style={{ top: modalPosition + "px" }}>
            <div className="modal-header">
                <span onClick={() => { setIsOpenAmenitiesModal(false) }}>⨯</span>
            </div>
            <section className="amenities-modal-container" >
                <StayAmenities key="stay-amenities" amenities={stay.amenities} isOpenAmenitiesModal={isOpenAmenitiesModal} stay={stay} />
            </section>
        </section>
    )
}