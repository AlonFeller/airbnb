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



















// export const MyDatePicker = () => {
//     const [formData, setFormData] = useState({
//       checkIn: new Date(),
//       checkOut: new Date()
//     });

//     const dispatch = useDispatch() 
//     const checkInOut = useSelector(state => state.userModule.checkInOut)
  
//     const handleOnChange = e => {
//       setFormData({...formData, [e.target.name]: e.target.value});
//       dispatch(setCheckInOut(checkInOut))


//     };
  
//     return (
//         <DatePicker
//         selected={formData.checkIn}
//         name="checkIn"
//         dateFormat="MMMM d, yyyy"
//         onChange={value => handleOnChange({target : { name: "dateForm", value}})}
//       />
//     );
//   };