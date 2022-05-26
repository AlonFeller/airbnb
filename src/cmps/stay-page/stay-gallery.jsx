import { useEffect, useState } from "react"

export const StayGallery = (props) => {
    const [stay, setStay] = useState(props.stay)
    // const [imgNum, setImgNum] = useState(0)

    console.log(stay.imgUrls)

    useEffect(() => {
    }, [])

    return (
        <section className="stay-gallery">
            {
                stay.imgUrls.forEach((imgUrl) => (
                    <div className="gallery-img-container">
                        <img src={require("../../assets/Images/" + imgUrl)}
                            height='270' width='270' alt="" />
                    </div >
                ))
    
            }
        </section>
        )
    }