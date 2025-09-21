import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import { useAuthContext } from '../providers/AuthProviders';

const useLoanStatus = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuthContext();
    const email = user?.email;
    
    const {data = {} } = useQuery({
        queryKey: [email],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/api/v1/creditDecision/${email}`);
            return res?.data?.data;
        }
    })
    return {data}
};

export default useLoanStatus;