import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import { useAuthContext } from '../providers/AuthProviders';

const useProfileInfo = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuthContext();

    const {data: profileInfo = {}} = useQuery({
        queryKey:  [user?._id],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/api/v1/profile/${user?._id}`);
            // console.log(res.data);
            return res.data;
        }
    })
    return {profileInfo};
};

export default useProfileInfo;