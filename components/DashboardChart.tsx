'use client';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { FaSave } from 'react-icons/fa';

const pieData = [
  { name: 'Total Order', value: 81, color: '#EF4444' }, // red
  { name: 'Customer Growth', value: 22, color: '#10B981' }, // green
  { name: 'Total Revenue', value: 62, color: '#3B82F6' }, // blue
];

const lineData = [

  { name: 'Sunday', orders: 100 },
  { name: 'Monday', orders: 300 },
  { name: 'Tuesday', orders: 456 },
  { name: 'Wednesday', orders: 200 },
  { name: 'Thursday', orders: 278 },
  { name: 'Friday', orders: 189 },
  { name: 'Saturday', orders: 390 },
];

export default function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  mt-8 w-full lg:w-[90%] lg:mx-auto">
      {/* Pie Chart Card */}
      <div className="bg-white rounded-xl shadow p-6 h-80">
        <h2 className="text-lg font-semibold text-black">Pie Chart</h2>
        <div className="flex flex-col sm:flex-row justify-around items-center gap-6">
          {pieData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={[{ value: item.value }, { value: 100 - item.value }]}
                    innerRadius={25}
                    outerRadius={35}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                  >
                    <Cell fill={item.color} />
                    <Cell fill="#E5E7EB" /> {/* light gray */}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <p className="text-lg font-bold text-black">{item.value}%</p>
              <p className="text-sm text-black">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Line Chart Card */}
      <div className="bg-white rounded-xl shadow p-6 h-80">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold text-black">Chart Order</h2>
            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</p>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-600 rounded hover:bg-blue-200 text-sm">
            <FaSave />
            Save Report
          </button>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
