import { useGetVideos } from "@hooks/useGetVideos";
import { useParams } from "react-router-dom";

const Videos = () => {
  const { keyword } = useParams();
  const {data} = useGetVideos()
  console.log(data)

  return (
    <div>
      Videos {keyword ? `${keyword}` : ""}
      <ul>{}</ul>
    </div>
  );
};

export default Videos;
