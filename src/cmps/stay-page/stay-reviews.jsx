import React from "react"
import { StayScores } from './stay-scores'

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
                <StayScores key="stay-map" stay={stay} />
            </div>

            <section className="reviews-list-container">
                <ul className="reviews-list">
                    {
                        stay.reviews.map((review, index) =>
                            <li className="review-preview-container" key={index}>
                                <section>
                                    <div className="review-preview-header">
                                        {/* <img src="" alt="" /> */}
                                        <div className="review-preview-text-container">
                                            <h4>{review.by.fullname}</h4>
                                            <h5>{`${new Date(review.at).getUTCFullYear()} ${new Date(review.at).getUTCMonth() + 1}`}</h5>
                                        </div>
                                        <p>{review.txt}</p>
                                    </div>
                                </section>
                            </li>)
                    }
                </ul>
            </section>
        </section>
    )
}