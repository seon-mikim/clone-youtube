import axios from 'axios';

const createInstance = () => {
  const config = {
    baseURL: import.meta.env.VITE_YOUTUBE_API,
    params:{key: import.meta.env.VITE_YOUTUBE_API_KEY}
  };
  const instance = axios.create(config);

  return instance;
};

export const axiosInstance = createInstance();