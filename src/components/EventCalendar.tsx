"use client"

import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Image from "next/image";





type ValuePiece = Date| null;
type Value = ValuePiece | [ValuePiece, ValuePiece] 

//TEMPORARY
const events = [
  {
    id: 1,
    title: "Morning coding",
    time: "04:00 AM - 06:05 AM",
    description: "Start your day with some coding to boost productivity and creativity. This is a great time to work on personal projects or learn new programming languages.",
  },

  {
    id: 2,
    title: "Morning run/gym",
    time: "06:30 AM - 07:30 AM",
    description: "Engage in physical activity to energize your body and mind. Whether it's a run in the park or a session at the gym, this is a great way to improve your overall health and well-being.",
  },

  {
    id: 3,
    title: "Breakfast and Todos",
    time: "07:30 AM - 08:00 AM",
    description: "Enjoy a nutritious breakfast while planning your day. This is a good time to set your goals, prioritize tasks, and organize your schedule for the day ahead.",
  },

  {
    id: 4,
    title: "Read books",
    time: "08:00 AM - 09:00 AM",
    description: "Spend some time reading books to expand your knowledge and stimulate your mind. Whether it's fiction, non-fiction, or self-help, reading can be a great way to relax and learn.",
  }
  

]



const EventCalendar = () => {
    
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white p-4 rounded-md'>
        <Calendar onChange={onChange} value={value} />
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold my-4">Events</h1>
          <Image src="/moreDark.png" alt="add event" width={20} height={20} />
        </div>
        <div className="flex flex-col gap-4">
          {events.map(event => (
            <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-assumDevs even:border-t-assumDevsPurple" 
            key={event.id}>
              <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                 <span className="text-xs text-gray-500">{event.time}</span>
              </div>
              <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
    
    </div>
  );
};

export default EventCalendar;



