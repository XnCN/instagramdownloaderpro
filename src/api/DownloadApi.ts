import axios, { AxiosInstance } from "axios";
import { downloadApiBaseUrl, userAgent } from "../constants";

const download: AxiosInstance = axios.create({
  baseURL: downloadApiBaseUrl,
  headers: {
    "User-Agent": userAgent,
    "x-requested-with": "XMLHttpRequest",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
});

export default download;
