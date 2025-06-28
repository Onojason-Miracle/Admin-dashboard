"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { day: "Sun", newCustomers: 60, returningCustomers: 30 },
  { day: "Sun", newCustomers: 40, returningCustomers: 60 },
  { day: "Sun", newCustomers: 50, returningCustomers: 20 },
  { day: "Sun", newCustomers: 30, returningCustomers: 60 },
  { day: "Sun", newCustomers: 60, returningCustomers: 40 },
];

const CustomerMapChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full h-100">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Customer Map</h2>
        <button className="text-sm bg-gray-100 text-black  px-3 py-1 rounded">
          Weekly
        </button>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="newCustomers" fill="#facc15" radius={[5, 5, 0, 0]} />
          <Bar
            dataKey="returningCustomers"
            fill="#f43f5e"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerMapChart;
