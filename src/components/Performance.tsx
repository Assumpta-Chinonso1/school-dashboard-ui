"use client"

import { Pie, PieChart, Sector, Cell, ResponsiveContainer } from 'recharts';


// #region Sample data
const data = [
  { name: 'Group A', value: 92, fill: "#C3EBFA" },
  { name: 'Group B', value: 8, fill: "#FAE27C"},

];

const Performance = () => {
  return (
    <div>
        <ResponsiveContainer>
            <PieChart>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%" 
        cy="100%"
        outerRadius="120%"
        fill="#8884d8"
        label
        isAnimationActive={isAnimationActive}
      />
  
      </PieChart>
   </ResponsiveContainer>

    </div>
  );
};

export default Performance;