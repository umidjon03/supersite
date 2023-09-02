import axios from "./axios";

export const getPortfolio = () => {
  return axios.get("/portfolio/list");
};

export const getTypes = () => {
  return axios.get("/portfolio/numbers");
};
