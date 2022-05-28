import React from "react"
import { StayReviews } from "./stay-reviews"

export const ReviewsModal = ({ stay, setIsOpenModal }) => {

    return (
        <section className="reviews-modal">
            <div className="modal-header">
                <h1 onClick={() => {console.log('message');  setIsOpenModal(false)}}>X</h1>
            </div>
            <StayReviews key="stay-reviews" reviews={stay.reviews} stay={stay}/>
        </section>
    )
}