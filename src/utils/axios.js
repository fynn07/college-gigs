import axios from "axios";
import { BACKEND_URL } from "./constants";

const token = JSON.parse(localStorage.getItem("token"));

export const axiosFetch = axios.create({
  baseURL: BACKEND_URL,
});

axiosFetch.interceptors.request.use(
  (config) => {
    config.headers["authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
