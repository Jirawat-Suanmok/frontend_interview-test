import axios from "axios";

export default defineNuxtPlugin(async () => {
  const axiosInstance = axios.create({
    baseURL: "https://api.gameliveball.com",
  });

  return {
    provide: {
      axios: axiosInstance,
    },
  };
});
