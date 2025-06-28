"use client";

import { useState } from "react";

import {
  FaBars,
  FaChartPie,
  FaShoppingBag,
  FaUsers,
  FaCommentDots,
  FaCalendarAlt,
  FaHeart,
} from "react-icons/fa";

import {
  MdOutlineFastfood,
  MdRateReview,
  MdAnalytics,
  MdReceiptLong,
} from "react-icons/md";

import { IoWallet } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi";
import { GiForkKnifeSpoon } from "react-icons/gi";

interface SidebarProps {
  onNavClick: (section: string) => void;
}

const navLinks = [
  { label: "Dashboard", section: "dashboard", icon: <FaChartPie /> },
  { label: "Order List", section: "orders", icon: <FaShoppingBag /> },
  { label: "Order Details", section: "odetails", icon: <MdReceiptLong /> },
  { label: "Customer", section: "customers", icon: <FaUsers /> },
  { label: "Analytics", section: "analytics", icon: <MdAnalytics /> },
  { label: "Reviews", section: "reviews", icon: <MdRateReview /> },
  { label: "Foods", section: "foods", icon: <MdOutlineFastfood /> },
  { label: "Food Details", section: "fdetails", icon: <GiForkKnifeSpoon /> },
  {
    label: "Customer Details",
    section: "cdetails",
    icon: <HiOutlineUserCircle />,
  },
  { label: "Calendar", section: "calendar", icon: <FaCalendarAlt /> },
  { label: "Chat", section: "chat", icon: <FaCommentDots /> },
  { label: "Wallet", section: "wallet", icon: <IoWallet /> },
];

const Sidebar = ({ onNavClick }: SidebarProps) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Topbar for mobile */}
      <div className="md:hidden fixed top-0 left-0 w-full z-100 flex justify-between items-center px-4 py-3 border-b bg-white shadow-sm">
        <div className="text-xl font-bold text-gray-800">
          Sedap<span className="text-green-600">.</span>
        </div>
        <button
          onClick={() => setShow(!show)}
          className="text-2xl text-green-600"
        >
          <FaBars />
        </button>
      </div>

      {/* Sidebar Drawer */}
      <div
        className={`fixed z-40 md:relative top-0 left-0 h-full w-70 bg-white shadow-lg p-4 pb-30 transition-transform transform ${
          show ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            Sedap<span className="text-green-600">.</span>
          </h1>
          <p className="text-gray-400 ">Modern Admin Dashboard</p>
        </div>

        <nav className="space-y-2 mt-5">
          {navLinks.map((link, i) => (
            <button
              key={i}
              onClick={() => {
                onNavClick(link.section);
                setShow(false); // Close menu on mobile
              }}
              className="flex items-center gap-3 px-4 py-2 text-left w-full text-gray-700 hover:bg-green-100 hover:text-green-800 rounded"
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </button>
          ))}

          <div className="mt-10">
            <img
              src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1751130438/task2/banner_yftd1i.png"
              alt="banner"
            />
          </div>

          <div className="mt-">
            <h5 className="text-gray-400 text-xl">
              Sedap Restaurant Admin Dashboard
            </h5>

            <p className="text-gray-400 mt-2">&copy; 2025 All Rights Reserved</p>

            <p className="text-gray-400 flex align-center justify-between mt-2">
              Made With <FaHeart className="text-red-500 text-l mt-1" />
              By Onojason Miracle
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
