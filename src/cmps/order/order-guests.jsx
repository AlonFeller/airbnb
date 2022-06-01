import { useState, useEffect } from "react";


export const Guests = ({ onGetGuestsNumber }) => {

    const [guests, setGuests] = useState({
        adults: 1,
        children: 0,
        pets: 0
        
    })

    useEffect(() => {
        onGetGuestsNumber(guests)
    }, [guests]);


    const openGuestsModal = () => {
        document.body.classList.toggle("guests-modal-open")
    }

    const incDecGuests = (ev, diff, type) => {
        ev.stopPropagation()
        const newGuests = { ...guests }
        newGuests[type] += diff
        setGuests(newGuests)
    }


    return (
        <section className="guests-btn" onClick={openGuestsModal}>


            <p>{guests.adults + guests.children + guests.pets + ' '} Guests </p>

            <div className="guests-modal">
                <div className="incDec-line">
                    <h4>Adults</h4>
                    <div className="set-guests">
                        <div className={(guests.adults > 0) ? 'incDec-btn' : 'incDec-btn-off'}
                            onClick={(guests.adults > 0) ? (ev) => incDecGuests(ev, -1, 'adults') : () => { return }}>-</div>
                        <p>{guests.adults}</p>
                        <div className="incDec-btn" onClick={(ev) => incDecGuests(ev, 1, 'adults')}>+</div>
                    </div>
                </div>
                <div className="incDec-line">
                    <h4>Children</h4>
                    <div className="set-guests">
                        <div className={(guests.children > 0) ? 'incDec-btn' : 'incDec-btn-off'}
                            onClick={(guests.children > 0) ? (ev) => incDecGuests(ev, -1, 'children') : () => { return }}>-</div>
                        <p>{guests.children}</p>
                        <div className="incDec-btn" onClick={(ev) => incDecGuests(ev, 1, 'children')}>+</div>
                    </div>
                </div>

                <div className="incDec-line">
                    <h4>Pets</h4>
                    <div className="set-guests">
                        <div className={(guests.pets > 0) ? 'incDec-btn' : 'incDec-btn-off'}
                            onClick={(guests.pets > 0) ? (ev) => incDecGuests(ev, -1, 'pets') : () => { return }}>-</div>
                        <p>{guests.pets}</p>
                        <div className="incDec-btn" onClick={(ev) => incDecGuests(ev, 1, 'pets')}>+</div>
                    </div>


                </div>
            </div>

        </section>
    )
}