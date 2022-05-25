import { useEffect, useState } from 'react'
import { stayService } from '../../services/stay.service'



export const StayList =  () => {
    const [ stays, setStays] = useState([])

    useEffect(() => {
        getStays()
    }, [])

    const getStays = async () => {
         const stays = await stayService.query('stay')
         setStays(stays)
    }


    console.log('stays from list', stays);
    const leng = stays.length

    return (
        <section>
            <h1>number of stays: {leng}</h1>
        </section>
    )



}



