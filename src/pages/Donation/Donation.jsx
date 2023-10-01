import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationData } from "../../utility/localstorage";
import ShowDonatedItems from "./ShowDonatedItems";

const Donation = () => {
  const datas = useLoaderData();
  const [donatedDatas, setDonatedDatas] = useState([]);
  const [dataLength, setDtaLength] = useState(4);
  useEffect(() => {
    const storedDonateData = getStoredDonationData();
    const totalDonatedData = storedDonateData.length;
    if (totalDonatedData) {
      const datasDonated = datas.filter((data) =>
        storedDonateData.includes(data.id)
      );
      // console.log(datasDonated);
      setDonatedDatas(datasDonated);
    }
  }, [datas]);

  return (
    <div>
      <ShowDonatedItems
        donatedDatas={donatedDatas}
        dataLength={dataLength}
      ></ShowDonatedItems>
      <div className={donatedDatas.length <= dataLength ? "hidden" : ""}>
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setDtaLength(donatedDatas.length)}
            className="px-5 py-2 bg-[#FF444A] text-white font-semibold hover:bg-red-500"
          >
            See All
          </button>
        </div>
      </div>
    </div >
  );
};

export default Donation;
