import { saveDonationData } from "../../utility/localstorage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShowDetails = ({ data }) => {
  // console.log(data);
  const { id, image, price, title, description, colors } = data;

  const handleDonationList = () => {
    const donatedAlready = saveDonationData(id);
    if (!donatedAlready) {
      toast("Donated susccessfully!");
    } else {
      toast("Oops! Already donated!");
    }
  };

  return (
    <div className="mt-10 rounded">
      <ToastContainer></ToastContainer>
      <img className="w-full rounded-md" src={image} alt="Alternative Image" />
      <div className="bg-[#0B0B0B80] opacity-50 p-6 -mt-20 h-20">
        <button
          onClick={handleDonationList}
          className="text-white opacity-100 px-5 py-2 flex justify-center align-middle"
          style={{ background: colors.textColor }}
        >
          Donate ${price}
        </button>
      </div>

      <h3 className="mt-10 text-3xl font-bold">{title}</h3>
      <p className="py-5">{description}</p>
    </div>
  );
};

export default ShowDetails;
