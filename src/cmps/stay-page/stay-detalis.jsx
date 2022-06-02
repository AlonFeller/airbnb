import React, { useState } from "react"
import { StayAmenities } from './stay-amenities'
import { OrderNow } from "./stay-order"
import { StayMoreFeatures } from "./stay-more-features"
import { AmenitiesModal } from "./amenities-modal"

export const StayDetails = ({ stay,setIsOpenModal,isOpenModal }) => {
    const [isOpenAmenitiesModal, setIsOpenAmenitiesModal] = useState(false)   

    return (
        <section className="stay-details flex gray-box-shadow">
            <div>
                <div className="stay-details-info">
                    <section className="stay-details-shortly gray-box-shadow">
                        <div className="stay-host-info">
                            <h2>{stay.roomType} hosted by {stay.host.fullname}</h2>
                            <img className="stay-host-img" src={(stay.host.newPictureUrl) ? stay.host.newPictureUrl :
                                'https://thispersondoesnotexist.com/image?cache=' + Date.now()} alt="" />
                        </div>
                    </section>
                    <section className="stay-more-features gray-box-shadow">
                        <StayMoreFeatures />
                    </section>
                    <section className="stay-details-summery gray-box-shadow">
                        <h2> Stay Description</h2>
                        <p>{stay.summary}</p>
                    </section>
                    <section className="stay-details-amenities">
                        <h2>What this place offers</h2>
                        <StayAmenities key="stay-amenities" stay={stay} isOpenAmenitiesModal={isOpenAmenitiesModal} setIsOpenAmenitiesModal={setIsOpenAmenitiesModal} amenities={stay.amenities.slice(0, 10)} />
                        <div className={isOpenAmenitiesModal ?"amenities-screen screen-open":"amenities-screen "} onClick={() => { setIsOpenAmenitiesModal(!isOpenAmenitiesModal);}}></div> 
                        { isOpenAmenitiesModal ? <AmenitiesModal className="amenities-modal" key="reviews-modal" stay={stay} setIsOpenAmenitiesModal={setIsOpenAmenitiesModal}  isOpenAmenitiesModal={isOpenAmenitiesModal}/> : null}
                        <button className="amenities-modal-btn" onClick={() => { setIsOpenAmenitiesModal(true); }}>Show all {stay.amenities.length} amenities</button>
                    </section>

                </div>
            </div>
            <div className="stay-details-order">
                <OrderNow />
            </div>


        </section>
    )
}

