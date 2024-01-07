import { axiosInstance } from "@apis/aixos/axiosInstance";
import { VideoData } from "@interfaces/videos";

export const getVideos = async () => {
  try {
    const response = await axiosInstance.get(
      "videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=25&regionCode=kr"
    );
    const videos = response.data.items;

    const videoWithChannelIcons = await Promise.all(
      videos.map(async (video: VideoData) => {
        const channelIconResponse = await getChannelIcon(
          video.snippet.channelId
        );
        return {
          ...video,
          channelIcon:
            channelIconResponse.items[0].snippet.thumbnails.default.url,
        };
      })
    );
    console.log(videoWithChannelIcons);
    return videoWithChannelIcons;
  } catch (error) {
    console.error("Error fetching main list:", error);
    throw error;
  }
};

const getChannelIcon = async (channelId: string) => {
  const response = await axiosInstance.get(
    `channels?part=snippet&id=${channelId}`
  );
  return response.data;
};
