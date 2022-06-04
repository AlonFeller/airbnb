import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { AirBnbBtn } from '../order/AirBnb-Btn'
import BasicDateRangePicker from '../order/order-calander'
import { Guests } from '../order/order-guests'
import { orderService } from '../../services/order.service'
import { utilService } from '../../services/util.service'
import { addOrder } from '../../store/order/order.actions'
import { Star } from "@mui/icons-material"
import { PriceDetails } from '../order/price-details'
import { OrderMsgModal } from '../order/order-msg-modal'
import { socketService } from '../../services/socket.service';

export const OrderNow = ({setIsOpenModal, isOpenModal}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { selectedStay } = useSelector(storeState => storeState.stayModule)
    const { user } = useSelector(storeState => storeState.userModule)
    const [dates, setDates] = useState()
    const [guests, setGuests] = useState()
    const [nights, setNight] = useState()
    const [isReadyOrder, setIsReadyOrder] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currOrder, setCurrOrder] = useState()


    useEffect(() => {
        if (user) {
  
            socketService.emit('set-user',  selectedStay.host._id);   
        } 
    },[])


    const onGetOrderDates = (currDates) => {
        setDates(currDates)
        const nightsOrder = getTotalNights(currDates[0], currDates[1])
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
        setIsModalOpen(true)
        setTimeout(() => {
            // closeModal()
            goTo()
        }, 3000)
    }

    const goTo = () => {
        navigate('/explore')
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    // useEffect(() => {
    //     socketService.emit('chat topic', topic);
    //     socketService.off(SOCKET_EMIT_SEND_MSG);
    //     socketService.on(SOCKET_EMIT_SEND_MSG, addMsg);
        
    //     return () => {
    //         socketService.off(SOCKET_EMIT_SEND_MSG, addMsg)
    //         // socketService.terminate()
    //         clearTimeout(timeout)
    //     }
    // }, [isBotMode])

    const notifyHost = (order) => {
        socketService.emit('new order', order)
    }

    return (
        <>
            <section className="stay-order flex">
                <div className="order-form-header flex space-between aling-items">
                    <span className="order-header-line">
                        <h4 className="cost bold">${utilService.numberWithCommas(selectedStay.price)}</h4> / night
                    </span>
                    <p className="order-header-line-ratings">
                        <span>< Star /></span>
                        <span className="avg-checkout"> <b>{(selectedStay.reviewScores.rating / 20).toFixed(1)}</b></span>
                        <span>·</span>
                        <span className="reviews bold pointer" onClick={() => { setIsOpenModal(!isOpenModal)}}><u>{selectedStay.numOfReviews} reviews</u></span>
                    </p>
                </div>
                <div className="order-calander">
                    <BasicDateRangePicker onGetOrderDates={onGetOrderDates} setIsReadyOrder={setIsReadyOrder} />
                    <Guests onGetGuestsNumber={onGetGuestsNumber} />
                </div>
                <AirBnbBtn onGetOrder={onGetOrder} user={user} selectedStay={selectedStay} btnInnerTxt='Order Now' />
                <br />
                {/* <button onClick={() => notifyHost({host:{id: '6294d815d4a26c96b0b03a77', name: 'Leo' }})}>send test order</button> */}
                {isReadyOrder && <PriceDetails selectedStay={selectedStay} nights={nights} />}
            </section >
            <section>
                {isModalOpen && <OrderMsgModal currOrder={currOrder} />}
            </section>
        </>
    )
}



