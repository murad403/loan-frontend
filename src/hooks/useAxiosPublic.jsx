import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://loan-backend-l3l3.onrender.com",
    withCredentials: true
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;