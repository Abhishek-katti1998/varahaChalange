// import { DateRangePicker } from 'rsuite';
import React,{ useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import  classes from './ui.module.css';
const Datepicker=() => {
  const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    console.log(dateRange)
  return (
      <DatePicker
          placeholderText="Start-End"
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
    //   isClearable={true}
    />
  );
};
export default Datepicker;