import axios from "./axios";

export const getCustomers = () => {
  return axios.get("/clients/list");
};
