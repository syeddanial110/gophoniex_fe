import axios from "axios";
import { getToken } from "./Auth";
import { BASEURL } from "./ApiRequest";

const API = axios.create({ baseURL: BASEURL });

API.interceptors.request.use(
  async (config) => {
    const tokenId = getToken();
    if (tokenId) {
      config.headers["Authorization"] = `Bearer ${tokenId}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default API;
