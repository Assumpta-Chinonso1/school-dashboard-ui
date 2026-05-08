"use client"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


// #region Sample data
const data = [
  {
    name: 'Mon',
    present: 4000,
    absent: 2400,
  
  },
  {
    name: 'Tue',
    present: 4000,
    absent: 2400,
  
  },
  {
    name: 'Wed',
    present: 4000,
    absent: 2400,
  
  },
  {
    name: 'Thur',
    present: 4000,
    absent: 2400,
  
  },
  {
    name: 'Fri',
    present: 4000,
    absent: 2400,
  
  },
 
 
];

const AttendanceChart = () => {
  return (
    <div className=''>AttendanceChart</div>
  );
};

export default AttendanceChart;