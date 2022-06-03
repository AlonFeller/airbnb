import React, { useEffect } from "react"
import { useSelector } from "react-redux";
import { StayReviews } from "./stay-reviews"

export const ReviewsModal = ({ stay, setIsOpenModal,isOpenModal }) => {
    const { modalPosition } = useSelector(state => state.headerModule.headerMode)
    useEffect(() => {
       if (isOpenModal)document.body.style.overflow = 'hidden';
                return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <section className="reviews-modal"style={{ top: modalPosition + "px" }}>
            <div className="modal-header">
                <span onClick={() => { setIsOpenModal(false) }}>⨯</span>
            </div>
            <StayReviews key="stay-reviews" reviews={stay.reviews} stay={stay} />
        </section>
    )
}

