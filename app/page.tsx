"use client";

import { useState } from "react";
import Home from "@/components/home";
import TopBar from "@/components/TopBar";
import StatsGrid from "@/components/widgets/StatsGrid";
import ChartsSection from "@/components/charts/ChartsSection";
import UserTable from "@/components/table/UserTable";
import Reviews from "@/components/reviews/Reviews";
import FoodList from "@/components/foods/FoodList";
import DashboardCharts from "@/components/DashboardChart";
import CusRev from "@/components/charts/CusRev";
import DashboardHeader from "@/components/DashboardHeader";

const DashboardPage = () => {
  const [section, setSection] = useState("dashboard");

  return (
    <main>
      <Home onNavClick={setSection}>
        <TopBar />
        <DashboardHeader />
        <StatsGrid />

        {section === "dashboard" && (
          <>
            <DashboardCharts />
            <CusRev />
          </>
        )}

        {section === "orders" && <ChartsSection />}

        {section === "cdetails" && <UserTable />}

        {section === "analytics" && <CusRev />}

        {section === "customers" && <UserTable />}

        {section === "reviews" && <Reviews />}

        {section === "chat" && <UserTable />}

        {section === "fdetails" && <FoodList />}

        {section === "foods" && <FoodList />}

        {section === "odetails" && <DashboardCharts />}

        {section === "odetails" && <DashboardCharts />}

        {section === "calendar" && <DashboardCharts />}

        {section === "wallet" && <CusRev />}
      </Home>
    </main>
  );
};

export default DashboardPage;
