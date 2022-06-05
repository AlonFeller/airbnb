
import React from 'react';
import { useNavigate } from 'react-router-dom';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export function ImageCarousel({ stay }) {
    const navigate = useNavigate()
    
    function onClickItem(stayId, ev) {
        ev.stopPropagation()
		window.scrollTo(0, 0);
        navigate.push(`/details/${stayId}`);   
    }

    return (
        <Carousel showThumbs={false} showStatus={false} onClickItem={(event) => onClickItem(stay._id,event)}>
            <div>
                <img src={require("../../assets/Images/" + stay.imgUrls[0])} />
            </div>
            <div>
                <img src={require("../../assets/Images/" + stay.imgUrls[1])} />
            </div>
            <div>
                <img src={require("../../assets/Images/" + stay.imgUrls[2])} />
            </div>
            <div>
                <img src={require("../../assets/Images/" + stay.imgUrls[3])} />
            </div>
            <div>
                <img src={require("../../assets/Images/" + stay.imgUrls[4])} />
            </div>
        </Carousel>
    );
}
;