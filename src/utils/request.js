import axios from "axios";
import router from "../router/index";

const service = axios.create({
  baseURL: "/api", // url = base url + request url
  timeout: 60000, // request timeout
  retryDelay: 1000, // 请求间隙
  retry: 2, // 重试次数
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;

    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
