import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Chart = ({ data, xAxis, yAxis }) => {

  return (
    <>
      <h3>Graph</h3>
      <LineChart
        width={600}
        height={300}
        data={data}
      >
        <Line type='monotone' dataKey={yAxis} stroke='#8884d8' />
        <CartesianGrid stroke='#ccc' />
        <XAxis dataKey={xAxis} />
        <YAxis dataKey={yAxis} />
      </LineChart>
    </>
  );
};

export default Chart;
