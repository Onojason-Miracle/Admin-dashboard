
// "use client";

// import { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { FaChartPie, FaShoppingBag, FaUsers, FaCommentDots, FaCalendarAlt } from "react-icons/fa";
// import { MdOutlineFastfood, MdRateReview, MdAnalytics , MdReceiptLong } from "react-icons/md";
// import { IoWallet } from "react-icons/io5";
// import { HiOutlineUserCircle } from 'react-icons/hi';
// import { GiForkKnifeSpoon } from 'react-icons/gi'; 

// interface SidebarProps {
//   onNavClick: (section: string) => void;
// }

// const navLinks = [
//   { label: "Dashboard", section: "dashboard", icon: <FaChartPie /> },
//   { label: "Order List", section: "orders", icon: <FaShoppingBag /> },
//    { label: "Order Details", section: "odetails", icon: <MdReceiptLong /> },
//     { label: "Customer", section: "customers", icon: <FaUsers /> },
//     { label: "Analytics", section: "analytics", icon: <MdAnalytics /> },
 
//   { label: "Reviews", section: "reviews", icon: <MdRateReview  /> },
//   { label: "Foods", section: "foods", icon: <MdOutlineFastfood /> },
//    { label: "Food Details", section: "fdetails", icon: <GiForkKnifeSpoon /> },
//     { label: "Customer Details", section: "cdetails", icon: <HiOutlineUserCircle  /> },
//   { label: "Calendar", section: "calendar", icon: <FaCalendarAlt /> },
//    { label: "Chat", section: "chat", icon: <FaCommentDots /> },
//   { label: "Wallet", section: "wallet", icon: <IoWallet /> },
// ];

// const Sidebar = ({ onNavClick }: SidebarProps) => {
//   const [show, setShow] = useState(false);

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <div className="md:hidden p-4">
//         <button onClick={() => setShow(!show)} className="text-2xl text-green-600">
//           <FaBars />
//         </button>
//       </div>

//       {/* Sidebar Drawer */}
//       <div className={`fixed z-40 md:relative top-0 left-0 h-screen w-64 bg-white shadow-lg p-4 transition-transform transform ${show ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
//         <h1 className="text-2xl font-bold mb-2 text-gray-800  mb-1 ">Sedap<span className="text-green-600">.</span></h1>
//         <p className="text-gray-400  mb-5">Modern Admin Dashboard</p>
//         <nav className="space-y-2 mt-5">
//           {navLinks.map((link, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 onNavClick(link.section);
//                 setShow(false); // Close on mobile
//               }}
//               className="flex items-center gap-3 px-4 py-2 text-left w-full text-gray-700 hover:bg-green-100 hover:text-green-800 rounded"
//             >
//               <span className="text-lg">{link.icon}</span>
//               {link.label}
//             </button>
//           ))}
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;






"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  FaChartPie,
  FaShoppingBag,
  FaUsers,
  FaCommentDots,
  FaCalendarAlt,
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
  { label: "Customer Details", section: "cdetails", icon: <HiOutlineUserCircle /> },
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
  <button onClick={() => setShow(!show)} className="text-2xl text-green-600">
    <FaBars />
  </button>
</div>

      {/* Sidebar Drawer */}
      <div
        className={`fixed z-40 md:relative top-0 left-0 h-screen w-64 bg-white shadow-lg p-4 transition-transform transform ${
          show ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
      
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">
            Sedap<span className="text-green-600">.</span>
          </h1>
          <p className="text-gray-400 ">
            Modern Admin Dashboard
          </p>
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
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

