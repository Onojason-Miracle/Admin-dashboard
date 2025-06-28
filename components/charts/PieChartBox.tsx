"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Delivered", value: 400 },
  { name: "Cancelled", value: 100 },
];

const COLORS = ["#22c55e", "#f43f5e"];

const PieChartBox = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full h-80">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Order Status</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={70}
            label
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartBox;
