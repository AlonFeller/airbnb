import { Image } from "cloudinary-react"
import React from "react"

export const StayGallery = ({ stay }) => {
    return (
        <section className="stay-gallery">
            {
                stay.imgUrls.map((imgUrl) =>
                    <div className="gallery-img-container" key={imgUrl}>
                        <Image cloudName="airzula" className="img-preview" 
                     publicId={'https://res.cloudinary.com/airzula/image/upload/airzula/' + imgUrl}/>
                    </div >
                )
            }
        </section>
    )
}