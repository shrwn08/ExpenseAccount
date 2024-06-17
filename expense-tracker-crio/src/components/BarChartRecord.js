import React from "react";
import "./barchart.css";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const aggregateData = (data) => {
  const aggregatedData = data.reduce((acc, item) => {
    const found = acc.find((entry) => entry.category === item.category);
    if (found) {
      found.price += parseInt(item.price);
    } else {
      acc.push({
        category: item.category,
        price: parseInt(item.price),
      });
    }
    return acc;
  }, []);
  return aggregatedData;
};

const BarChartRecord = ({ data }) => {
  const ChartData = aggregateData(data).map((item) => ({
    name: item.category,
    value: item.price,
  }));

  return (
    <div className="bar-chart">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart layout="vertical" 
        data={ChartData}>
        
          <YAxis type="category" className="y-axis" dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="rgba(135, 132, 210, 1)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartRecord;

/*
 <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
*/ 