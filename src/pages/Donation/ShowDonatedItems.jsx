import DonatedItem from "./DonatedItem";

const ShowDonatedItems = ({ donatedDatas, dataLength }) => {
  // console.log(dataLength);
  return (
    <div className="py-9 grid grid-cols-1 md:grid-cols-2 gap-5">
      {donatedDatas.slice(0, dataLength).map((donatedData) => (
        <DonatedItem donatedData={donatedData} key={donatedData.id} />
      ))}
    </div>
  );
};

export default ShowDonatedItems;
