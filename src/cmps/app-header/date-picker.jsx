import { useState } from "react"
import DatePicker from "react-datepicker2";
import { useDispatch, useSelector } from "react-redux";
import { setCheckInOut } from "../../store/user/user.actions";



export const MyDatePicker = () => {
    const [formData, setFormData] = useState({
      checkIn: new Date(),
      checkOut: new Date()
    });

    const dispatch = useDispatch() 
    const checkInOut = useSelector(state => state.userModule.checkInOut)
  
    const handleOnChange = e => {
      setFormData({...formData, [e.target.name]: e.target.value});
      dispatch(setCheckInOut(checkInOut))


    };
  
    return (
        <DatePicker
        selected={formData.checkIn}
        name="checkIn"
        dateFormat="MMMM d, yyyy"
        onChange={value => handleOnChange({target : { name: "dateForm", value}})}
      />
    );
  };