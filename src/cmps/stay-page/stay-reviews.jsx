import React from "react"
import { StayScores } from './stay-scores'
import { ReviewsList } from './reviews-list'

export const StayReviews = ({ stay }) => {

    return (
        <section className="stay-reviews">
            <h2 className="stay-reviews-header">
                <span className="icon-star">⭐</span>
                <span className="info-rating">{stay.reviewScores.rating / 20}</span>
                <span className="info-point" > • </span>
                <span>({stay.numOfReviews} reviews)</span>
            </h2>
            <div className="review-states">
                <StayScores key="stay-scores" stay={stay} />
            </div>

            <section className="reviews-list-container">
                <ReviewsList key="reviews-list" stay={stay} />
            </section>
        </section>
    )
}