import React from "react"
import { StayReviews } from "./stay-reviews"

export const ReviewsModal = ({ stay, setIsOpenModal }) => {

    return (
        <section className="reviews-modal">
            <div className="modal-header">
                <span onClick={() => {console.log('message');  setIsOpenModal(false)}}>X</span>
            </div>
            <StayReviews key="stay-reviews" reviews={stay.reviews} stay={stay}/>
        </section>
    )
}