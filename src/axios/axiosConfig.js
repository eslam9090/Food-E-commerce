import axios from "axios";

const BASE_URL = "http://localhost:1337/api/";

const axiosConfig = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { axiosConfig };
