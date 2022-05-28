import React from "react"
import {StayReviews} from "./stay-reviews"

export const ReviewsModal = ({ stay }) => {

    return (     
        <StayReviews key="stay-reviews" stay={stay} />
    )
}