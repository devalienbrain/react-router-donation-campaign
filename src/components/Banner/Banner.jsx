import { useState } from "react";

const Banner = ({ setFromSearchInput }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSearchItemFromInput = () => {
    const inputElement = document.getElementById("searchInput").value;
    // console.log(inputElement);
    setInputValue(inputElement);
    document.getElementById("searchInput").value = "";
  };
  // console.log(inputValue);
  setFromSearchInput(inputValue);
  return (
    <div
      className="hero bg-[#FFFFFFF2]"
      style={{
        backgroundImage: "url(https://i.ibb.co/hLQfPrj/Banner-Img.jpg)",
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="hero-overlay bg-opacity-10">
        <img className="w-full h-full" src="/images/BannerImg.png" alt="" />
      </div>
      <div className="hero-content text-center text-neutral-content">
        <div>
          <h1 className="mb-5 text-2xl md:text-5xl text-black font-bold">
            I Grow By Helping People In Need
          </h1>
          <input
            className="h-10 px-2 md:px-4 rounded-l-lg text-black border border-gray-200"
            type="text"
            placeholder="Search here..."
            name="Search Input"
            id="searchInput"
          />
          <button
            onClick={handleSearchItemFromInput}
            className="h-10 bg-[#FF444A] text-white px-2 md:px-4 rounded-r-lg"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
