import { useEffect, useState } from "react"

export const StayReviews = (props) => {
    const [stay, setStay] = useState(props.stay)
    // const [categories, setCategories] = useState(props.stay.reviewScores)

    useEffect(() => {
    }, [])

    // const filterCategories ()

    return (
        <section className="stay-reviews">
            <h2 className="stay-reviews-header">
                <span className="icon-star">⭐</span>
                <span className="info-rating">{stay.reviewScores.rating / 20}</span>
                <span className="info-point" > • </span>
                <span>({stay.numOfReviews} reviews)</span>
            </h2>
            <div className="review-states">
                <div className="review-category">
                
                </div>
            </div>
        </section>
    )
}