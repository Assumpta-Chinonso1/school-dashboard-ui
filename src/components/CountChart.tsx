"user client"

import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';
//import { RechartsDevtools } from '@recharts/devtools';


// #region Sample data
const data = [
  {
    name: '18-24',
    uv: 31.47,
    pv: 2400,
    fill: '#8884d8',
  },
  {
    name: '25-29',
    uv: 26.69,
    pv: 4567,
    fill: '#83a6ed',
  },
  {
    name: '30-34',
    uv: 15.69,
    pv: 1398,
    fill: '#8dd1e1',
  },
  {
    name: '35-39',
    uv: 8.22,
    pv: 9800,
    fill: '#82ca9d',
  },
  {
    name: '40-49',
    uv: 8.63,
    pv: 3908,
    fill: '#a4de6c',
  },
  {
    name: '50+',
    uv: 2.63,
    pv: 4800,
    fill: '#d0ed57',
  },
  {
    name: 'unknown',
    uv: 6.67,
    pv: 4800,
    fill: '#ffc658',
  },
];






const CountChart = () => {
  return (
    <div className=''>
        {/*TITLE */}

        <div className=""></div>
        {/*CHART */}
              <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          data={data}
          innerRadius="70%"
          outerRadius="100%"
          startAngle={90}
          endAngle={-270}
          cx="50%"
          cy="50%"
          barSize={14}
        >
          <RadialBar
            dataKey="value"
            background
            clockWise
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
        <div className=""></div>
        {/*BOTTOM*/}
        <div className=""></div>
    </div>
  );
};

export default CountChart;