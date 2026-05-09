"use client"
import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';


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
    <div className='bg-white rounded-lg p-4 h-full'>
        <div className="">
            <h1 className="">Attendance</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
         <ResponsiveContainer width="100%" height="90%">
        <BarChart
            data={data}
            width={500}
            height={300}
             barSize={20} >

      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" axisLine={false} />
      <YAxis axisLine={false} />
      <Tooltip />
      <Legend  align="left" verticalAlign="top" wrapperStyle={{paddingTop:"20px", paddingBottom:"40px" }} />
      <Bar dataKey="present" fill="#8884d8" activeBar= {<Rectangle fill="pink" stroke="blue"/>}/>
      
      <Bar dataKey="absent" fill="#82ca9d" activeBar = { <Rectangle fill="gold" stroke="purple"/>}/>
      </BarChart>
      
    </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;