import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-7 min-h-screen justify-center items-center">
      <h2 className="text-4xl font-semibold text-red-700">Oops.. </h2>
      <h1 className="text-4xl font-extralight">Wrong path!!!</h1>
      <Link
        to={"/"}
        className="px-5 py-2 bg-[#FF444A] text-white text-sm font-bold hover:bg-red-500 rounded"
      >
        Click to go home
      </Link>
    </div>
  );
};

export default ErrorPage;
