"use client";

import Sidebar from "./sidebar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  onNavClick: (section: string) => void;
}

const Home = ({ children, onNavClick }: LayoutProps) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 pt-10 md:pt-0">
      {/* Sidebar on top for mobile, left for desktop */}
      <Sidebar onNavClick={onNavClick} />

      {/* Main content area */}
      <main className="flex-1 p-4 overflow-auto">{children}</main>
    </div>
  );
};

export default Home;
