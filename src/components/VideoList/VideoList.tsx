import VideoCard from "@components/VideoCard/VideoCard";
import { VideoData } from "@interfaces/videos";

interface VideoListProps {
  videoData?: VideoData[];
}

const VideoList = ({ videoData }: VideoListProps) => {
  return (
    <ul>
      {videoData?.map((videoDataItem) => (
        <VideoCard key={videoDataItem.snippet.channelId} />
      ))}
    </ul>
  );
};

export default VideoList;
