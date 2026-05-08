"use client"
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// #region Sample data
const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 60,
  
  },
  {
    name: 'Tue',
    present: 70,
    absent: 20,
  
  },
  {
    name: 'Wed',
    present: 60,
    absent: 30,
  
  },
  {
    name: 'Thur',
    present: 50,
    absent: 10,
  
  },
  {
    name: 'Fri',
    present: 70,
    absent: 15,
  
  },
 
 
];

const AttendanceChart = () => {
  return (
    <div className=''>
        <div className="">
            <h1 className="">Attendance</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
         <ResponsiveContainer width="100%" height="80%">
        <BarChart
            data={data}
            width={500}
            
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}

        >



      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
      <Bar dataKey="uv" fill="#82ca9d" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />
      
    </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;