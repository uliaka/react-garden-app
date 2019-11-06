import React from 'react';
import { DatePicker } from "@y0c/react-datepicker";
//import "@/y0c/react-datepicker/assets/styles/calendar.scss";

export default function Calendar() {
  const onChange = title => (...args) => console.log(title, args);
  return (
    <div className="Calendar">
        <DatePicker showToday onChange={onChange("DatePicker")} />
    </div>
  );
}

