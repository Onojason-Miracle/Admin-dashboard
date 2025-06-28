"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", revenue: 120 },
  { name: "Tue", revenue: 210 },
  { name: "Wed", revenue: 150 },
  { name: "Thu", revenue: 180 },
  { name: "Fri", revenue: 100 },
  { name: "Sat", revenue: 200 },
  { name: "Sun", revenue: 90 },
];

const LineChartBox = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full h-80">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Revenue This Week</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#22c55e" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartBox;
