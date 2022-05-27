import React from "react"

export const StayScores = ({ stay }) => {

    return (
        <section className="stay-scores">
            {
                Object.keys(stay.reviewScores).map(key => {
                    if (key !== 'rating') {
                        return (
                            <div className="review-category" key={key}>
                                <p className="title-category">{key}</p>
                                <div className="score-category-container">
                                    <div className="line-loader-container">
                                        <div className="line-loader" style={{ width: `${stay.reviewScores[key] * 10}%` }}></div>
                                    </div>
                                    <p className="score-category-num">{stay.reviewScores[key]}</p>
                                </div>
                            </div>
                        )

                    }
                })
            }
        </section >
    )
}