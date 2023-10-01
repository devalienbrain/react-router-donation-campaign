import { Link } from "react-router-dom";
const SingleData = ({ singleData }) => {
  // console.log(singleData);
  const { id, image, title, category, colors } = singleData || {};
  // console.log(id);

  return (
    <Link to={`/singleData/${id}`}>
      <div className="rounded-lg" style={{ background: colors.colorBg }}>
        <img className="w-full rounded-t" src={image} alt="Alternative Image" />
        <div className="p-4" style={{ color: colors.textColor }}>
          <button
            className="px-2 py-1 rounded"
            style={{ background: colors.btnBg }}
          >
            {category}
          </button>
          <h3 className="font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default SingleData;
