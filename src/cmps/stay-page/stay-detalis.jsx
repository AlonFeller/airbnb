import React from "react"
import { StayAmenities } from './stay-amenities'
import { OrderNow } from "./stay-order"
import { StayMoreFeatures } from "./stay-more-features"

export const StayDetails = ({ stay }) => {



    return (
        <section className="stay-details flex gray-box-shadow" >
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
                        <StayAmenities key="stay-amenities" stay={stay} amenities={stay.amenities.slice(0, 10)} />
                        {/* {isOpenModal ? <ReviewsModal className="reviews-modal" key="reviews-modal" stay={selectedStay} setIsOpenModal={setIsOpenModal} /> : null} */}
                        {/* <button className="reviews-modal-btn" onClick={() => setIsOpenModal(true)}>Show all {selectedStay.reviews.length} reviews</button> */}
                    </section>

                </div>
            </div>
            <div className="stay-details-order">
                <OrderNow />
            </div>
        </section>
    )
}

