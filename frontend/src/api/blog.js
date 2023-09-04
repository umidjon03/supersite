import axios from "./axios";

export const getArticles = () => {
  return axios.get("/blog/all");
};
