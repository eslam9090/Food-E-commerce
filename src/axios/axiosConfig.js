import axios from "axios";

// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_API_URL;

const axiosConfig = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosConfig };
