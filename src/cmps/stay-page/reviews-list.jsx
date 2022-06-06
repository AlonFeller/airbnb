import React from "react"
import { LongText } from "./long-text"


export const ReviewsList = ({ reviews, isLongTxt = false }) => {

    return (
        <ul className="reviews-list-container">
            {
                reviews.map((review, index) =>
                    <li className="review-preview-container" key={review + index}>
                        <section>
                            <div className="review-preview-header">
                                <div className="review-preview-text-container">
                                    <div className="review-heading">
                                        <img className="review-user-img"
                                            src={(review.newUserImg) ? review.newUserImg : 'https://picsum.photos/' + index} alt="" />
                                        <h4>{review.by.fullname}</h4>
                                    </div>
                                    <h5>{`${new Date(review.at).toDateString()}`}</h5>
                                </div>
                                {isLongTxt ? <LongText key="long-text" txt={review.txt} /> : review.txt}
                            </div>
                        </section>
                    </li>)
            }

        </ul>
    )
}