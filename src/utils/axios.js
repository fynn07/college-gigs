import axios from "axios";
import { BACKEND_URL } from "./constants";

export const axiosFetch = axios.create({
  baseURL: BACKEND_URL,
});
