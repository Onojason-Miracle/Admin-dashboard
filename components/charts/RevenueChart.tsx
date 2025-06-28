"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", revenue2020: 25000, revenue2021: 32000 },
  { month: "Feb", revenue2020: 21000, revenue2021: 30000 },
  { month: "Mar", revenue2020: 28000, revenue2021: 36000 },
  { month: "Apr", revenue2020: 20000, revenue2021: 39000 },
  { month: "May", revenue2020: 27000, revenue2021: 41000 },
  { month: "Jun", revenue2020: 33000, revenue2021: 35000 },
  { month: "Jul", revenue2020: 31000, revenue2021: 34000 },
  { month: "Aug", revenue2020: 29000, revenue2021: 37000 },
  { month: "Sept", revenue2020: 26000, revenue2021: 40000 },
  { month: "Oct", revenue2020: 24000, revenue2021: 42000 },
  { month: "Nov", revenue2020: 30000, revenue2021: 45000 },
  { month: "Dec", revenue2020: 32000, revenue2021: 47000 },
];

const RevenueChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full h-100">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Total Revenue
      </h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue2020"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="revenue2021"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
