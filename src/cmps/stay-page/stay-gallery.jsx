import { useState } from "react"

export const StayGallery = (props) => {
    const [stay, setStay] = useState(props.stay)

    return (
        <section className="stay-gallery flex">
            {
                stay.imgUrls.map((imgUrl) =>
                    <div className="gallery-img-container">
                        <img src={require("../../assets/Images/" + imgUrl)}
                            key={imgUrl} height='270' width='270' alt="" />
                    </div >
                )

            }
        </section>
    )
}