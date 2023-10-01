import { useState } from "react";
import AllData from "../AllData/AllData";
import Banner from "../Banner/Banner";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const data = useLoaderData();
  const [fromSearchInput, setFromSearchInput] = useState(data);
  // console.log(fromSearchInput);
  return (
    <div>
      <Banner setFromSearchInput={setFromSearchInput}></Banner>
      <div>
        <AllData fromSearchInput={fromSearchInput}></AllData>
      </div>
    </div>
  );
};

export default Home;
