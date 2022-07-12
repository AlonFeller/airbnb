import { useState } from "react"
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import { setCheckInOut } from "../../store/user/user.actions";
import "react-datepicker/dist/react-datepicker.css";


export const MyDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)} />
    );
  };
