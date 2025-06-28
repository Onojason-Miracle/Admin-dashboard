"use client";

import StatCard from "./StatCard";
import { FaShoppingCart, FaTruck, FaTimesCircle, FaDollarSign } from "react-icons/fa";

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full lg:w-[90%] lg:mx-auto">
      <StatCard
        icon={<FaShoppingCart />}
        label="Total Orders"
        value={75}
        subtitle="+15% this week"
      />
      <StatCard
        icon={<FaTruck />}
        label="Total Delivered"
        value={357}
        subtitle="+10% this week"
        iconBg="bg-blue-100"
      />
      <StatCard
        icon={<FaTimesCircle />}
        label="Total Canceled"
        value={65}
        subtitle="-5% this week"
        iconBg="bg-red-100"
      />
      <StatCard
        icon={<FaDollarSign />}
        label="Total Revenue"
        value="$128"
        subtitle="+12% this week"
        iconBg="bg-yellow-100"
      />
    </div>
  );
};

export default StatsGrid;
