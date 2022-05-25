import { useEffect, useState } from 'react'
import { stayService } from '../../services/stay.service'
import { StayPreview } from './stay-preview'




export const StayList =  (props) => {
    const [ stays, setStays] = useState([])

    useEffect(() => {
        getStays()
    }, [])

    const getStays = async () => {
         const stays = await stayService.query('stay')
         setStays(stays.splice(0,10))
    }


    // console.log('stays from list', stays);

    return (
        <section className='stay-list'>
           <h4>stay filter</h4>

            {stays.map(stay => <StayPreview key={stay._id} stay={stay} />)}

        </section>
    )



}



