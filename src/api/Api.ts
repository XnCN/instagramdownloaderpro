import axios, { AxiosInstance } from "axios";
import { apiBaseUrl, userAgent } from "../constants";

const http: AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "User-Agent": userAgent,
  },
});

const fetchClient = {
  async get(path: string) {
    const data = await fetch(`https://www.picuki.com${path}`);
    const body = await data.text();
    return { data: body };
  },
};

export default fetchClient;
