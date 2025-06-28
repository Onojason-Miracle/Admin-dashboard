import RevenueChart from "./RevenueChart";
import CustomerMapChart from "./CustomerChart";

const CusRev = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 w-full lg:w-[90%] lg:mx-auto">
      <div className="lg:col-span-2 ">
        <RevenueChart />
      </div>
      <CustomerMapChart />
    </div>
  );
};

export default CusRev;
