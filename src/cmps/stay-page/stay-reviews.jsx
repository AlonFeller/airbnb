import { useState } from "react"

export const StayReviews = (props) => {
    const [stay, setStay] = useState(props.stay)



    return (
        <section className="stay-reviews">
            <h2 className="stay-reviews-header">
                <span className="icon-star">⭐</span>
                <span className="info-rating">{stay.reviewScores.rating / 20}</span>
                <span className="info-point" > • </span>
                <span>({stay.numOfReviews} reviews)</span>
            </h2>
            <div className="review-states">

                {/* {
                    stay.reviewScores.map(reviewScore => {
                        if (Object.keys(stay.reviewScores) !== 'rating') {
                            <div className="review-category">
                                <p className="title-category">{reviewScore}</p>
                                <div className="score-category-container">
                                    <div className="line-loader-container">
                                        <div className="line-loader"></div>
                                    </div>
                                    <p className="score-category-num">{reviewScore}</p>
                                </div>
                            </div>
                        }
                    })

                } */}


            </div>

            <section className="reviews-list-container">
                <ul className="reviews-list">
                    {
                        stay.reviews.map((review,index) => 
                            <li className="review-preview-container" key={index}>
                                <section>
                                    <div className="review-preview-header">
                                        {/* <img src="" alt="" /> */}
                                        <div className="review-preview-text-container">
                                            <h4>{review.by.fullname}</h4>
                                            <h5>{review.at}</h5>
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