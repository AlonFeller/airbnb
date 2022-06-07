import * as React from 'react'
import { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import RangePicker from "react-range-picker";

// import "../../styles/basics/dateLibStyles.css";


export const DatePicker = ({ onGetOrderDates, setIsReadyOrder }) => {

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

  // useEffect(() => {
  //   if (!startDate || !endDate) {
  //     return setIsReadyOrder(false)
  //   }
  //   setIsReadyOrder(true)
  //   onGetOrderDates({ state })
  //   console.log(onGetOrderDates({ state }))
  // }, [state]);

  const placeholder = ({ startDate, endDate }) => {
    if (!startDate) {
      return <div className="placeholder"> Select date and time range </div>;
    }
    return (
      <div className="placeholderWrap">
        <div className="placeholder">From - {startDate.toLocaleString()}</div>
        {endDate && (
          <div className="placeholder">To - {endDate.toLocaleString()}</div>
        )}
      </div>
    );
  };
  return (
    <RangePicker
      placeholder={placeholder}
      selectTime
      onDateSelected={(f, l) => {
        console.log(f, l);
      }}
      onClose={() => {
        console.log(" closed ");
      }}
    />
  );
};








