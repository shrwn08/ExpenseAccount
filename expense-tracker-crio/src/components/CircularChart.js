import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./circular-chart.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.05;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const aggregateData = (data) => {
  // if (!Array.isArray(data)) {
  //   console.error('Expected data to be an array, but got:', data);
  //   return [];
  // }

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

const CircularChart = ({ data }) => {
  const ChartData = aggregateData(data).map((item) => ({
    name: item.category,
    value: item.price,
  }));

  return (
    <>
      <ResponsiveContainer width="80%" height="80%" className="pie-chart-box">
        <PieChart width={400} height={400}>
          <Pie
            data={ChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {ChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="legend">
        {ChartData.map((entry, index) => (
          <div key={`legend-${index}`} className="legend-item">
            <div
              className="color-box"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span className="text">{entry.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default CircularChart;
