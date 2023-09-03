import axios from "./axios";

export const postContact = (credentials) => {
  return axios.post("/contact/create/", credentials);
};
