const DonatedItem = ({ donatedData }) => {
  // console.log(donatedData);
  const { image, category, title, price, colors } = donatedData || {};
  return (
    <div
      className="rounded-lg flex flex-col lg:flex-row"
      style={{ background: colors.colorBg }}
    >
      <img
        className="rounded-l-lg rounded-r-none"
        src={image}
        alt="Alternative Image"
      />
      <div className="p-4" style={{ color: colors.textColor }}>
        <button
          className="px-2 py-1 rounded mb-2"
          style={{ background: colors.btnBg }}
        >
          {category}
        </button>
        <h3 className="text-black text-xl font-semibold mb-2">{title}</h3>
        <h2 className="mb-2">${price}</h2>
        <button
          style={{ background: colors.textColor }}
          className="text-white px-3 py-2 rounded-md"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default DonatedItem;
