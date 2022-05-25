import { stayService } from '../../services/stay.service'



export const  StayList = () => {
    
    const stays = stayService.query('stayDB')
    console.log(stays);
    const  leng = stays.length

    return (
        <section>
            <h1>number of stays: {leng}</h1>
        </section>
    )



}



