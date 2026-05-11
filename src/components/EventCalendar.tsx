

{/*import { useState } from "react";




type ValuePiece = Date| null;
type Value = ValuePiece | [ValuePiece, ValuePiece]  

const EventCalendar = () => {
    
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div className=''>
    
    </div>
  );
};

export default EventCalendar;*/}



"use client"

//import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Meeting",
    start: new Date(2026, 4, 11, 10, 0),
    end: new Date(2026, 4, 11, 12, 0),
  },
];

export default function MyCalendar() {
  return (
    <div className="h-[500px]">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}