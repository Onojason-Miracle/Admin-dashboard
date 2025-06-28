"use client";

import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: string | number;
  subtitle: string;
  iconBg?: string;
}

const StatCard = ({ icon, label, value, subtitle, iconBg = "bg-green-100" }: StatCardProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
      <div className={`p-3 rounded-full ${iconBg} text-green-600 text-xl`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default StatCard;
