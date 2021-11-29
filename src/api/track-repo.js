import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api",
  timeout: 1000
});

export const trackRepo = repo => {
  try {
    axiosInstance.post("/track_repo", repo);
  } catch (e) {
    console.error(e);
  }
};
