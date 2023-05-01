import axios from "axios";

export default axios.create({
    baseURL: "https://api.narutodb.xyz/",
    headers: {
        "Content-Type":"application/json"
    }
});

axios.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});