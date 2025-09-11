import { useState } from "react";
import { useAuthContext } from "../../providers/AuthProviders";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { MdOutlineEditNote } from "react-icons/md";

const PersonalInformation = () => {
    const {user} = useAuthContext();
    const [updateProfile, setUpdateProfile] = useState(false);
    const userId = user?._id;
    const axiosPublic = useAxiosPublic();
    // console.log(user);

    const handleUpdateProfile = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const firstName = form.get('first-name');
        const lastName = form.get('last-name');
        const streetAddress = form.get('street');
        const city = form.get('city');
        const phoneNumber = form.get("phone");
        const state = form.get('state');
        const zipCode = form.get('zip');
        const updatedUserInformation = {
            firstName, lastName, streetAddress, city, state, zipCode, phoneNumber
        }
        // console.log(updatedUserInformation);
        axiosPublic.patch(`/api/v1/user/personal-information/${userId}`, {updatedUserInformation})
           .then(response =>{
                // console.log(response);
                localStorage.setItem("user", JSON.stringify(response?.data?.data));
                toast.success(response?.data?.message);
                setUpdateProfile(false);
           })
           .catch(error =>{
                toast.error(error?.response?.data?.message);
           })
    }
    return (
        <div>
            <div className='flex justify-between items-center py-2 bg-gray-200 px-5 rounded-sm'>
                <p className='font-semibold text-md'>Personal Information</p>
                <button onClick={() => setUpdateProfile(true)} className={`${updateProfile ? "hidden" : "block"} text-sm font-semibold cursor-pointer flex items-center gap-1`}><MdOutlineEditNote size={25}/>Update Profile</button>
            </div>
            <form onSubmit={handleUpdateProfile} className='mt-5 md:space-y-3 space-y-1'>
                <div className='flex flex-col md:flex-row gap-3'>
                    <div className='w-full md:w-1/2'>
                        <label className='text-sm font-medium text-gray-700 block'>First Name</label>
                        <input disabled={!updateProfile}  name='first-name' defaultValue={user?.personalInformation?.firstName ? user?.personalInformation?.firstName : ""} type="text" className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]' />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <label className='text-sm font-medium text-gray-700 block'>Last Name</label>
                        <input disabled={!updateProfile} name='last-name' type="text" defaultValue={user?.personalInformation?.lastName ? user?.personalInformation?.lastName : ""} className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row gap-3'>
                    <div className='w-full md:w-1/2'>
                        <label className='text-sm font-medium text-gray-700 block'>Email Address</label>
                        <input name='email' disabled value={user?.email} type="email" className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]'/>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <label className='text-sm font-medium text-gray-700 block'>Phone Number</label>
                        <input disabled={!updateProfile} name='phone' type="text" defaultValue={user?.personalInformation?.phoneNumber ? user?.personalInformation?.phoneNumber : ""} className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]'/>
                    </div>
                </div>
                <div className='w-full'>
                        <label className='text-sm font-medium text-gray-700 block'>Street Address</label>
                        <input disabled={!updateProfile} name='street' type="text" defaultValue={user?.personalInformation?.streetAddress ? user?.personalInformation?.streetAddress : ""} className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]' placeholder={"12 street road"} />
                </div>
                <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
                    <div>
                        <label className='text-sm font-medium text-gray-700 block'>City</label>
                        <input disabled={!updateProfile} name='city' type="text" defaultValue={user?.personalInformation?.city ? user?.personalInformation?.city : ""} className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]' placeholder={"New York"} />
                    </div>
                    <div>
                        <label className='text-sm font-medium text-gray-700 block'>State</label>
                        <input disabled={!updateProfile} name='state' defaultValue={user?.personalInformation?.state ? user?.personalInformation?.state : ""} type="text" className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]' placeholder={"NY"} />
                    </div>
                    <div>
                        <label className='text-sm font-medium text-gray-700 block'>ZIP Code</label>
                        <input disabled={!updateProfile} defaultValue={user?.personalInformation?.zipCode ? user?.personalInformation?.zipCode : ""} name='zip' type="text" className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]' placeholder={"5010"} />
                    </div>
                </div>
                <div className={`${updateProfile ? "block" : "hidden"}`}>
                    <div className="flex justify-center items-center mt-5">
                        <button className="cursor-pointer bg-red-950 px-3 rounded-sm py-2 text-gray-200 text-sm font-semibold">Update Now</button>
                    </div>
                </div>
            </form>
            
        </div>
    );
};

export default PersonalInformation;