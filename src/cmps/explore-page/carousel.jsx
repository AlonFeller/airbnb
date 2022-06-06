
import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'cloudinary-react';
import { useNavigate } from 'react-router-dom';

export default function ImageCarousel({ stay }) {

    const imgUrls = stay.imgUrls

    const navigate = useNavigate()
    
    return (
        <Carousel showThumbs={false} showStatus={false} onClickItem={() => navigate('/stay/' + stay._id)}>

            <div>
                <Image  cloudName="airzula" className="img-preview" 
                     publicId={'https://res.cloudinary.com/airzula/image/upload/airzula/' + imgUrls[0]}/>
            </div>
            <div>
            <Image  cloudName="airzula" className="img-preview" 
                     publicId={'https://res.cloudinary.com/airzula/image/upload/airzula/' + imgUrls[1]}/>
            </div>
            <div>
            <Image  cloudName="airzula" className="img-preview" 
                     publicId={'https://res.cloudinary.com/airzula/image/upload/airzula/' + imgUrls[2]}/>
            </div>
            <div>
            <Image  cloudName="airzula" className="img-preview" 
                     publicId={'https://res.cloudinary.com/airzula/image/upload/airzula/' + imgUrls[3]}/>
            </div>
            <div>
            <Image  cloudName="airzula" className="img-preview" 
                     publicId={'https://res.cloudinary.com/airzula/image/upload/airzula/' + imgUrls[4]}/>
            </div>

       
        </Carousel>
    )
}