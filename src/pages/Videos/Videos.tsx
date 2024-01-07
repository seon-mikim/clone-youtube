import Section from "@components/Section/Section";
import VideoList from "@components/VideoList/VideoList";
import { useGetVideos } from "@hooks/useGetVideos";
// import { useParams } from "react-router-dom";

const Videos = () => {
  const {data:videoData} = useGetVideos()

console.log(videoData)
  return (
    <Section>
      <VideoList videoData={videoData}/>
    </Section>
  );
};

export default Videos;
