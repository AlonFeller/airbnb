import React from "react"

export const StayScores = ({ stay }) => {

    return (
        <section className="stay-scores">
            {
                Object.keys(stay.reviewScores).map(key => {
                    if (key !== 'rating') {
                        return (
                            <div className="review-category" key={key}>
                                <div className="title-category">{key}</div>
                                <div className="score-category-container flex">
                                    <div className="line-loader-container">
                                        <div className="line-loader" style={{ width: `${stay.reviewScores[key] * 10}%` }}></div>
                                    </div>
                                    <div className="score-category-num">{(stay.reviewScores[key] / 2).toFixed(1)}</div>
                                </div>
                            </div>
                        )

                    }
                })
            }
        </section >
    )
}