import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// axiosInstance.interceptors.request.use();
// axiosInstance.interceptors.response.use();
// axiosInstance.interceptors.request.eject();
// axiosInstance.interceptors.response.eject();

export default axiosInstance;
