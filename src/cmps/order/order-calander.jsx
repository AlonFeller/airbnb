import * as React from 'react'
import { useEffect, useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns'

export default function BasicDateRangePicker({ onGetOrderDates, setIsReadyOrder }) {

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


  return (
    <DateRange
      editableDateInputs={true}
      onChange={item => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
    />
  );
}

