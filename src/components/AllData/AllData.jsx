import { useLoaderData } from "react-router-dom";
import SingleData from "../SingleData/SingleData";

const AllData = ({ fromSearchInput }) => {
  let allData = useLoaderData();
  // console.log(allData);
  // console.log(fromSearchInput);
  if (typeof fromSearchInput === 'string') {
    fromSearchInput = fromSearchInput.toLowerCase();
  }
  if (
    fromSearchInput === "education" ||
    fromSearchInput === "health" ||
    fromSearchInput === "clothing" ||
    fromSearchInput === "food"
  ) {
    console.log(fromSearchInput);
    allData = allData.filter((aData) => aData.category.toLowerCase() === fromSearchInput);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-6">
      {allData.map((singleData) => (
        <SingleData key={singleData.id} singleData={singleData}></SingleData>
      ))}
    </div>
  );
};

export default AllData;
