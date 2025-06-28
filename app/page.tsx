
// import Footer from "@/components/footer";
// import Home from "@/components/home";
// import StatsGrid from "@/components/widgets/StatsGrid";
// import ChartsSection from "@/components/charts/ChartsSection";
// import UserTable from "@/components/table/UserTable";
// import Reviews from "@/components/reviews/Reviews";
// import TopBar from '@/components/TopBar';

// const DashboardPage = () => {
//   return (
//     <main>
//       <Home>
//          <TopBar />
//       <h1 className="text-2xl font-bold mb-4 text-gray-800  mt-4 ">Dashboard</h1>
//       <StatsGrid />
//         <ChartsSection />
//            <UserTable />
//            <Reviews />
//            <Footer/>
//     </Home>
   
//     </main>
//   );
// };

// export default DashboardPage;




"use client";

import { useState } from "react";
import Home from "@/components/home";
import TopBar from "@/components/TopBar";
import Footer from "@/components/footer";
import StatsGrid from "@/components/widgets/StatsGrid";
import ChartsSection from "@/components/charts/ChartsSection";
import UserTable from "@/components/table/UserTable";
import Reviews from "@/components/reviews/Reviews";
import FoodList from "@/components/foods/FoodList";
import DashboardCharts from '@/components/DashboardChart';
import CusRev from "@/components/charts/CusRev";

const DashboardPage = () => {
  const [section, setSection] = useState("dashboard");

  return (
  <main>
      <Home onNavClick={setSection} >
      <TopBar />
      <h1 className="text-2xl font-bold mb-4 text-gray-800 mt-4">Dashboard</h1>

      {/* Always on the screen*/}
      <StatsGrid />
      {/* <DashboardCharts/>
      <CusRev/> */}

      {/* Show only based on sidebar click */}
      
      {section === "orders" && <ChartsSection />}
      {section === "cdetails" && <UserTable />}
      {section === "customers" && <UserTable />}
      {section === "reviews" && <Reviews />}
      {section === "fdetails" && <FoodList />}
       {section === "foods" && <FoodList />}
       {section === "odetails" && <DashboardCharts />}
       {section === "analytics" && <CusRev />}

     
    </Home>
     <Footer />
  </main>
  );
};

export default DashboardPage;
