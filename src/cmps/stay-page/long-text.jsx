import React from "react"


export const LongText = ({txt}) => {

    let txtShow
    let length = 100
    
    if (txt.length < length) {
        txtShow = txt;
    } else {
        txtShow = txt.substring(0, length) + '...';
    }

    return (     
            <p>{txtShow}</p>
    )
}