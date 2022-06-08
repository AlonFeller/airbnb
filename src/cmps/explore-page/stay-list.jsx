import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { stayService } from '../../services/stay.service'
import { loadStays } from '../../store/stay/stay.actions'
import { StayPreview } from './stay-preview'
import { toggleIsExplore, toggleHeaderIsTop, toggleHeaderIsActive } from "../../store/header/header.action";
import Variants from './phantom'


export const StayList = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
        (async () => {
            toggleIsExplore(true);
        })();
    }, []);

    const phantoms = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    
    const stays = useSelector(state => state.stayModule.stays)

    return (
        <section className='list-container'>

            <section className='stay-list'>

                { (stays.length)?  stays.map(stay => <StayPreview key={stay._id} stay={stay} />) : 
                phantoms.map(phan => <Variants className="skeleton-preview"/>) }

            </section>
        </section>
    )

}



