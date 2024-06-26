import axios , {AxiosInstance} from "axios";

const api:AxiosInstance = axios.create({baseURL:"https://api.wallex.ir/v1"})

api.interceptors.response.use(
    response => response,
    (error) => Promise.reject(error)
)
export default api