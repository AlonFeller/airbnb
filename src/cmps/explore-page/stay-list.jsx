import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stayService } from '../../services/stay.service'
import { loadStays } from '../../store/stay/stay.actions'
import { StayPreview } from './stay-preview'


export const StayList = (props) => {

    const dispatch = useDispatch() 
    useEffect(() => {
        dispatch(loadStays())
    }, [])

    const stays = useSelector(state => state.stayModule.stays)

    return (
        <section className='list-container'>

        <section className='stay-list'>

            {stays.map(stay => <StayPreview key={stay._id} stay={stay} />)}

        </section>
        </section>
    )

}



