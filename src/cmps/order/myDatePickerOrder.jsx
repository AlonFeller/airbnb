// import DatePicker from "react-datepicker";
// import { useDispatch, useSelector } from "react-redux";
// import { setCheckInOut } from "../../store/user/user.actions";
// import "react-datepicker/dist/react-datepicker.css";


// export const MyDatePickerOrder = ({handleCheck}) => {
//   const [startDate, setStartDate] = useState(new Date());
  
//   useEffect(() => {
//     handleCheck(startDate)
//   },[startDate])
//   return (
//     <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
//     );
//   };
  
  
  
  
  
import * as React from 'react';
import { useEffect, useState } from "react"
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const MyDatePickerOrder = ({handleCheck, label} ) => {
  const [value, setValue] = React.useState(null);

  useEffect(() => {
    handleCheck(value)
  },[value])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}


