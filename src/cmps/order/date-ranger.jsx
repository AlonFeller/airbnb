import { useEffect, useState } from "react";
import { MyDatePickerOrder } from "./myDatePickerOrder";





export const DateRanger = ({ onGetOrderDates, setIsReadyOrder }) => {


  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  
  
  useEffect(() => {
    if (!state[0] || !state[1]) {
      return setIsReadyOrder(false)
    }
    setIsReadyOrder(true)
    onGetOrderDates({ state })
    console.log(onGetOrderDates({ state }))
  }, [state]);

  const handleCheckin = (date) => {
      setState([date, state[1]])
      console.log(state);
  }
  const handleCheckout = (date) => {
      setState([state[0], date])
      console.log(state);
  }


  return (
    <section className="date-ranger">
      <div>

    
      <MyDatePickerOrder className="date"  label='Check in' handleCheck={handleCheckin} />
      </div>
      <div>

   
      <MyDatePickerOrder className="date" label='Check out'  handleCheck={handleCheckout} />
      </div>
    </section>
  )
}




