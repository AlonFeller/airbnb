import React from "react"
import moment from 'moment'
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { utilService } from '../../services/util.service'
import { toggleOrderMsgModal } from '../../store/order/order.actions'
import { Image } from "cloudinary-react"

export const OrderMsgModal = ({ currOrder, setIsOrderModalOpen }) => {
    const { modalPosition } = useSelector(state => state.headerModule.headerMode)
    const { openOrderModal } = useSelector(state => state.orderModule)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const goTo = () => {
        navigate('/explore')
    }

    const onCloseModal = () => {
        goTo()
        setIsOrderModalOpen(false)
        dispatch(toggleOrderMsgModal(false))
        console.log(openOrderModal)
    }

    return (
        <section className="order-modal" style={{ top: (modalPosition + 140) + "px" }}>
            <p className="time-order"><b>{new Date().toDateString()}</b></p>
            <h4>Your order complete successfully</h4>
            <div className="order-msg-main flex">
                <div className="order-msg-details">
                    <p className="order-stay-name"><b>{currOrder.stay.name}</b></p>
                    {/* <p className="order-details">Details:</p> */}
                    <div className="dates-order">
                        <p className="check-in-out"><u>Check in:</u><span><b>{moment(currOrder.checkIn).format('MM/DD/YYYY')}</b></span></p>
                        <p className="check-in-out"><u>Check out:</u><span><b>{moment(currOrder.checkOut).format('MM/DD/YYYY')}</b></span></p>
                    </div>
                    <p className="order-guests flex"><span className="order-guests-total"><u>Guests:</u><b>{currOrder.guestsNumber.total}</b></span>
                        {currOrder.guestsNumber.adults && <p> adults:<span><b>{currOrder.guestsNumber.adults}</b></span> </p>}
                        {currOrder.guestsNumber.childern ? <p>childern:<span><b>{currOrder.guestsNumber.childern}</b></span></p> : null}
                        {currOrder.guestsNumber.pets ? <p>pets:<span><b>{currOrder.guestsNumber.pets}</b></span> </p> : null}
                    </p>
                </div>
                <div className="order-img-container" key={currOrder.stay.img}>
                    <Image cloudName="airzula" className="img-preview"
                        publicId={'https://res.cloudinary.com/airzula/image/upload/airzula/' + currOrder.stay.img} />
                </div>
            </div>
            <div className="order-total">
                <p className="order-total-price"><b>Total price:<span>${utilService.numberWithCommas(currOrder.totalPrice)}</span></b></p>
                <button className="order-modal-btn" onClick={() => { onCloseModal() }}>Continue exploring</button>
            </div>
        </section>
    )
}