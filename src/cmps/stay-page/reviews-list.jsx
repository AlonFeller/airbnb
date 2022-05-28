import React from "react"

export const ReviewsList = ({ stay }) => {

    return (
        <ul className="reviews-list-container">
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
    )
}