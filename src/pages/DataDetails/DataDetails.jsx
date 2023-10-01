import { useLoaderData, useParams } from "react-router-dom";
import ShowDetails from "./ShowDetails";

const DataDetails = () => {
  const datas = useLoaderData();
  const { id } = useParams();
  // console.log(id);
  const data = datas.find((data) => data.id == id);
  // console.log(data);
  return <ShowDetails key={data.id} data={data}></ShowDetails>;
};

export default DataDetails;
