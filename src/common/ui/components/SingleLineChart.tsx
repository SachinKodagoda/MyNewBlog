import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

type TProps = {
  data: { name: string; val: number }[];
};
function SingleBarChart({ data }: TProps): JSX.Element {
  return (
    <AreaChart width={850} height={350} data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
        </linearGradient>
        <linearGradient id='colorEn' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey='name' />
      <YAxis
        ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 100]}
        type='number'
        domain={[0, 'dataMax+10']}
        allowDataOverflow={false}
      />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      {/* <Area type='monotone' dataKey='end' stroke='#8884d8' fillOpacity={0.5} fill='url(#colorEn)' /> */}
      <Area type='monotone' dataKey='val' stroke='#82ca9d' fillOpacity={1} fill='url(#colorPv)' />
    </AreaChart>
  );
}

export default SingleBarChart;
