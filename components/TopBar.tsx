"use client";
import type { ReactNode } from "react";

import {
  FaBell,
  FaComments,
  FaShoppingCart,
  FaCog,
  FaSearch,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full lg:w-[90%] lg:mx-auto flex flex-col md:flex-row items-center justify-between lg:gap-10 mt-5   ">
      {/* Search Bar */}
      <div className="flex items-center w-full relative">
        <input
          type="text"
          placeholder="Search here"
          className="w-full border border-white rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-1 focus:ring-blue-400 bg-white text-black"
        />
        <span className="absolute right-3 text-gray-400">
          <FaSearch />
        </span>
      </div>

      <div className="flex w-full lg:w-[35%] items-center justify-between gap-6  mt-5  ">
        {/* Icons */}
        <div className="flex items-center gap-4">
          <IconBadge icon={<FaBell />} count={3} color="text-blue-400" />
          <IconBadge icon={<FaComments />} count={2} color="text-blue-400" />
          <IconBadge
            icon={<FaShoppingCart />}
            count={4}
            color="text-indigo-400"
          />
          <IconBadge icon={<FaCog />} count={1} color="text-red-400" />
        </div>

        {/* Profile */}
        <div className="flex items-center justify-center gap-1">
          <p className="text-sm text-gray-700">
            Hello, <span className="font-medium">Miracle</span>
          </p>
          <img
            src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1750846708/task2/Pic_wyodj6.png"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function IconBadge({
  icon,
  count,
  color,
}: {
  icon: ReactNode;
  count: number;
  color?: string;
}) {
  return (
    <div className="relative text-xl">
      <span className={`cursor-pointer ${color}`}>{icon}</span>
      <span className="absolute -top-2 -right-2 text-[10px] bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
        {count}
      </span>
    </div>
  );
}
