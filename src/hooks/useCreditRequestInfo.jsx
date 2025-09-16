import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCreditRequestInfo = () => {
    const axiosPublic = useAxiosPublic();

    const {data: creditRequestInfo = []} = useQuery({
        queryKey: ["creditRequestInfo"],
        queryFn: async() =>{
            const res = await axiosPublic.get("/api/v1/creditRequest");
            return res?.data?.data;
        }
    })
    return {creditRequestInfo}
};

export default useCreditRequestInfo;