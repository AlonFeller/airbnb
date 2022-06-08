import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { AirBnbBtn } from '../order/AirBnb-Btn'
import BasicDateRangePicker, { DatePicker } from '../order/order-calander'
import { Guests } from '../order/order-guests'
import { orderService } from '../../services/order.service'
import { utilService } from '../../services/util.service'
import { addOrder, toggleOrderMsgModal } from '../../store/order/order.actions'
import { NoEncryption, Star } from "@mui/icons-material"
import { PriceDetails } from '../order/price-details'
import { socketService } from '../../services/socket.service';
import RangePicker from "react-range-picker";
import { DateRanger } from '../order/date-ranger'

export const OrderNow = ({ setIsOpenModal, isOpenModal, setIsOrderModalOpen, setCurrOrder }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { selectedStay } = useSelector(storeState => storeState.stayModule)
    const { user } = useSelector(storeState => storeState.userModule)
    const { openOrderModal } = useSelector(storeState => storeState.orderModule)
    const [dates, setDates] = useState([new Date(), new Date()])
    const [guests, setGuests] = useState()
    const [nights, setNight] = useState()
    const [isReadyOrder, setIsReadyOrder] = useState(false)
    // const [datesModal, setDatesModal] = useState(true)


    useEffect(() => {
        if (user) {
            socketService.emit('set-user', selectedStay.host._id);
        }
    }, [])

    
    // const setModalState = (datesModal) => {
    //     console.log(datesModal);
    //     if (datesModal)return "none"
    //      return "relative"
    // }

    const onGetOrderDates = (currDates) => {
        setDates(currDates.state)
        const nightsOrder = getTotalNights(currDates.state[0], currDates.state[1])
        setNight(nightsOrder)

    }

    const onGetGuestsNumber = (currGuests) => {
        setGuests(currGuests)
    }

    const onGetOrder = (selectedStay, user) => {
        if (!isReadyOrder) return
        const newOrder = orderService.add(selectedStay, user, guests, dates, nights)
        setCurrOrder(newOrder)
        onAddOrder(newOrder)
        notifyHost(newOrder)
    }

    function getTotalNights(checkIn, checkOut) {
        return (checkOut - checkIn) / (1000 * 60 * 60 * 24);
    }

    const onAddOrder = (order) => {
        dispatch(addOrder(order))
        openModal()
    }

    const openModal = () => {
        setIsOrderModalOpen(true)
        dispatch(toggleOrderMsgModal(true))
        console.log(openOrderModal)
    }
    

    const notifyHost = (order) => {
        console.log('sending order');
        socketService.emit('new order', order)
    }

    return (
        <>
            <section className="stay-order flex">
                <div className="order-form-header flex space-between aling-items">
                    <span className="order-header-line">
                        <h4 className="cost bold">${utilService.numberWithCommas(selectedStay.price)}</h4>  <span className="night">night</span>   
                    </span>
                    <p className="order-header-line-ratings">
                        <span>< Star /></span>
                        <span className="avg-checkout"> <b>{(selectedStay.reviewScores.rating / 20).toFixed(1)}</b></span>
                        <span>·</span>
                        <span className="reviews bold pointer" onClick={() => { setIsOpenModal(!isOpenModal) }}><u>{selectedStay.numOfReviews} reviews</u></span>
                    </p>
                </div>
                <div className="order-calander">
                    {/* <div className="calander-modal" style={{ display: setModalState(datesModal) }} onclick={setDatesModal(true)}> */}
                        {/* <DatePicker onGetOrderDates={onGetOrderDates} setIsReadyOrder={setIsReadyOrder} /> */}
                        <DateRanger onGetOrderDates={onGetOrderDates} setIsReadyOrder={setIsReadyOrder}   />
                        {/* <button className="modal-closer" onclick={setDatesModal(!datesModal)}>Done</button> */}
                    {/* </div> */}
                    <Guests onGetGuestsNumber={onGetGuestsNumber} />
                </div>
                <AirBnbBtn onGetOrder={onGetOrder} user={user} selectedStay={selectedStay} btnInnerTxt='Order Now' />
                <br />
                {isReadyOrder && <PriceDetails selectedStay={selectedStay} nights={nights} />}
            </section >

        </>
    )
}



const colors = ["rgb(240, 240,240)", "rgb(113,113,113)", "rgba(88, 88, 88, 0.7", "rgb(34, 34, 34)"]