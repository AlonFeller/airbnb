import React from "react"

export const StayGallery = ({ stay }) => {

    return (
        <section className="stay-gallery">
            {
                stay.imgUrls.map((imgUrl) =>
                    <div className="gallery-img-container" key={imgUrl}>
                        <img src={require("../../assets/Images/" + imgUrl)} alt="" />
                    </div >
                )

            }
        </section>
    )
}