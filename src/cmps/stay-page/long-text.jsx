import React from "react"


export const LongText = (txt) => {

    let txtShow

    if (txt.length < 100) {
        txtShow = txt;
    } else {
        txtShow = txt.substring(0, 100) + '...';
    }

    return (     
            <p>{txtShow}</p>
    )
}