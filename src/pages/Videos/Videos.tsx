import { useParams } from "react-router-dom";

const Videos = () => {
  const { keyword } = useParams();
  return <div>Videos {keyword ? `${keyword}` : ""}</div>;
};

export default Videos;
