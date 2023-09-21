import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://dummy.restapiexample.com/api/v1/",
    headers :{
        "Content-Type":"application/json",
        "Accept":"application/json",
    },
    timeout: 15000,
})

axiosInstance.interceptors.request.use((config) => {
    let token ='@Mytoken';
    if(token){
        config.headers['Authorization'] = token
    }
    return config;
})

axiosInstance.interceptors.response.use((response) => {
    return response;
})


export default axiosInstance;