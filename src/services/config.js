/* eslint-disable no-unused-vars */
import axios from "axios";
const api = axios.create({ baseURL:"https://api.wallex.ir/v1/" });

api.interceptors.response.use(
    res => res.data.result.symbols,
    error =>Promise.reject(error)
);

export default api