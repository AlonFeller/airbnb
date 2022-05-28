import React from "react"

export const StayScores = ({ stay }) => {

    return (
        <section className="stay-scores">
            {
                Object.keys(stay.reviewScores).map(key => {
                    if (key !== 'rating') {
                        return (
                            <div className="review-category flex" key={key}>
                                <div className="title-category">{key}</div>
                                <div className="score-category-container">
                                    <div className="line-loader-container">
                                        <div className="line-loader" style={{ width: `${stay.reviewScores[key] * 10}%` }}></div>
                                    </div>
                                    <div className="score-category-num">{stay.reviewScores[key] / 2}</div>
                                </div>
                            </div>
                        )

                    }
                })
            }
        </section >
    )
}