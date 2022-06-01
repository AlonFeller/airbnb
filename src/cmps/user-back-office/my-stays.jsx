
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadStays } from "../../store/stay/stay.actions"
import { MyStayPreview } from './my-stay-preview'

export const MyStays = (props) => {

    const user = useSelector((state => state.userModule.user))
    const stays = useSelector(state => state.stayModule.stays)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadStays())
    }, [])
    
    const getMyStays = () => {


        const id = user._id
        const hostStays = stays.filter(stay => stay.host._id === id)
        console.log('my stays', hostStays);
        console.log('stays', stays.length);
    

        return hostStays
    }

    const myCurrStays = getMyStays()







    return (
        <section className="my-stays">
            <h1>my stays</h1>

            <div className='list-container'>
                

            <div className="stay-list">

                {myCurrStays.map(stay => {
                    return <MyStayPreview key={stay._id} stay={stay} />
                })}

            </div>

                </div>

        </section>

    )
}
