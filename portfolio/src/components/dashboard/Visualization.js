import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Visualization = props => {
  const { viewsData } = props;

  return (
    <ResponsiveContainer width="100%" aspect={4.0 / 2.0} className="chart">
      <LineChart width={500} height={300} data={viewsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis width={30} />
        <Tooltip/>
        <Line
          type="monotone"
          dataKey="count"
          stroke="#2196f3"
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Visualization;
