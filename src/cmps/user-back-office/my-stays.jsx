
import { useSelector } from "react-redux"
import { StayPreview } from '../explore-page/stay-preview'

export const MyStays = (props) => {

    // const user = useSelector((state => state.userModule.user))
    // const stays = useSelector(state => state.stayModule.stays)

    // const getMyStays = () => {

    //     const id = user._id
    //     const hostStays = stays.filter(stay => !stay.host._id === id)
    //     console.log('my stays', hostStays);
    //     console.log('stays', stays.length);

    //     return hostStays
    // }

    // const myCurrStays = getMyStays()







    return (
        <section className="my-stays">
            {/* <h1>my stays</h1>

            <div className="host-stays-list">

                {myCurrStays.map(stay => {
                    return <StayPreview key={stay._id} stay={stay} />
                })}

            </div> */}


        </section>

    )
}