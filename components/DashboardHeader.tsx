"use client";

import { FaCalendarAlt } from "react-icons/fa";

export default function DashboardHeader() {
  return (
    <div className="w-full lg:w-[90%] lg:mx-auto flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
      {/* Left Side */}
      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">
          Hi, <span className="font-medium">Miracle</span>. Welcome back to
          Sedap Admin!
        </p>
      </div>

      {/* Right Side - Filter Period Box */}
      <div className="bg-white px-4 py-3 rounded-lg shadow flex items-center gap-3 w-full md:w-auto">
        <div className="text-blue-500 text-xl">
          <FaCalendarAlt />
        </div>
        <div>
          <h5 className="text-sm font-semibold text-gray-700">Filter Period</h5>
          <p className="text-xs text-gray-500">11 April 2025 - 26 May 2025</p>
        </div>
      </div>
    </div>
  );
}
