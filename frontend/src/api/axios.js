import axios from "axios";

export const DOMAIN = process.env.REACT_APP_DOMAIN;

axios.defaults.baseURL = DOMAIN;

export default axios;
