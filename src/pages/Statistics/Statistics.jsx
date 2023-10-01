import ShowPieChart from "./ShowPieChart";

const Statistics = () => {
  return (
    <div className="flex flex-col justify-center align-middle">
      <ShowPieChart></ShowPieChart>
      <div className="flex gap-3 items-center justify-center text-xs">
        <p>Your Donation</p>
        <div className="w-20 h-2 bg-[#00C49F]"></div>
        <p>Total Donation</p>
        <div className="w-20 h-2 bg-[#FF444A]"></div>
      </div>
    </div>
  );
};

export default Statistics;
