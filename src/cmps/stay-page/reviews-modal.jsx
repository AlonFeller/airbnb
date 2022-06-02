import React, { useEffect } from "react"
import { StayReviews } from "./stay-reviews"

export const ReviewsModal = ({ stay, setIsOpenModal,isOpenModal }) => {
    useEffect(() => {
       if (isOpenModal)document.body.style.overflow = 'hidden';
                return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <section className="reviews-modal">
            <div className="modal-header">
                <span onClick={() => { setIsOpenModal(false) }}>⨯</span>
            </div>
            <StayReviews key="stay-reviews" reviews={stay.reviews} stay={stay} />
        </section>
    )
}

