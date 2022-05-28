import React from "react"


export const LongText = (review) => {

    let txtShow

    if (review.txt.length < 100) {
        txtShow = review.txt;
    } else {
        txtShow = review.txt.substring(0, 100) + '...';
    }

    return (
        <div className="long-txt" >
            <p>{txtShow}</p>
        </div>
    )

}