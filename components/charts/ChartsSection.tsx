import PieChartBox from "./PieChartBox";
import LineChartBox from "./LineChartBox";

const ChartsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 w-full lg:w-[90%] lg:mx-auto">
      <PieChartBox />
      <LineChartBox />
    </div>
  );
};

export default ChartsSection;
