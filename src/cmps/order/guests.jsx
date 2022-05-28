import { useState } from "react";


export const Guests = (props) => {

    const [guests, setGuests] = useState({
        adults: 0,
        children: 0,
        pets: 0

    })


    const openGuestsModal = () => {
        console.log('pewpew');
    }

    const incDecGuests = (diff, type) => {
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
                        <div className={(guests.adults > 0)? 'incDec-btn': 'incDec-btn-off'}
                         onClick={(guests.adults > 0)?() => incDecGuests(-1, 'adults') : () => {return}}>-</div>
                        <p>{guests.adults}</p>
                        <div className="incDec-btn" onClick={() => incDecGuests(1, 'adults')}>+</div>
                    </div>
                </div>
                <div className="incDec-line">
                    <h4>Children</h4>
                    <div className="set-guests">
                        <div className={(guests.children > 0)? 'incDec-btn': 'incDec-btn-off'} 
                        onClick={ (guests.children > 0)?() => incDecGuests(-1, 'children') : () => {return}}>-</div>
                        <p>{guests.children}</p>
                        <div className="incDec-btn" onClick={() => incDecGuests(1, 'children')}>+</div>
                    </div>
                </div>

                <div className="incDec-line">
                    <h4>Pets</h4>
                    <div className="set-guests">
                        <div className={(guests.pets> 0)? 'incDec-btn': 'incDec-btn-off'}  
                        onClick={(guests.pets > 0)?() => incDecGuests(-1, 'pets') : () => {return}}>-</div>
                        <p>{guests.pets}</p>
                        <div className="incDec-btn" onClick={()=> incDecGuests(1, 'pets')}>+</div>
                    </div>


                </div>
            </div>

        </section>
    )
}