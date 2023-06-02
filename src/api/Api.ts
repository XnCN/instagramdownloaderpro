import axios, { AxiosInstance } from "axios";
import { apiBaseUrl, userAgent } from "../constants";

const http: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "User-Agent": userAgent,
  },
});

export default http;
