import React, { useState } from 'react';
import { useAuthContext } from '../providers/AuthProviders';
import { MdOutlineEditNote } from 'react-icons/md';
import useProfileInfo from '../hooks/useProfileInfo';
import { RiLockPasswordLine } from "react-icons/ri";
import useAxiosPublic from '../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import vision from "../assets/vision.jpg";
import LenderPasswordChangeModal from '../components/LenderDashBoard/LenderPasswordChangeModal';

const Settings = () => {
    const {user} = useAuthContext();
    const userId = user?._id;
    const [updateProfile, setUpdateProfile] = useState(false);
    const {profileInfo} = useProfileInfo();
    const axiosPublic = useAxiosPublic();

    const handleUpdateProfile = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const firstName = form.get('first-name');
        const lastName = form.get('last-name');
        const address = form.get('street');
        const city = form.get('city');
        const phone = form.get("phone");
        const state = form.get('state');
        const zipCode = form.get('zip');
        const profileInfo = {
            phone, 
            personalInfo: {
                firstName, lastName
            },
            contactInfo: {
                address, city, state, zipCode
            },
            financialInfo: ""
        }
        // console.log(profileInfo);
        axiosPublic.patch(`/api/v1/profile/${userId}`, profileInfo)
           .then(response =>{
                toast.success(response?.data?.message);
                setUpdateProfile(false);
                e.target.reset();
           })
           .catch(error =>{
                toast.error(error?.response?.data?.message);
        })
    }
    return (
        <div className="px-3 py-5 shadow-md bg-white rounded-sm">
                    <div className='flex flex-col md:flex-row justify-between items-center py-4 bg-gray-200 px-5 rounded-sm md:py-2'>
                        <p className='font-semibold text-md'>Personal Information</p>
                        <div className='flex items-center gap-4 md:gap-7 flex-col md:flex-row mt-3 md:mt-0'>
                            <button onClick={() => setUpdateProfile(true)} className={`${updateProfile ? "hidden" : "block"} text-sm font-semibold cursor-pointer flex items-center gap-1`}><MdOutlineEditNote size={25}/>Update Profile</button>
                            <button onClick={()=>document.getElementById('my_modal_7').showModal()} className={`${updateProfile ? "hidden" : "block"} text-sm font-semibold cursor-pointer flex items-center gap-1`}><RiLockPasswordLine size={20}/>Change Password</button>
                        </div>
                    </div>
                    <div className='mt-6 border-b border-gray-300 pb-6 px-4 flex items-center gap-3'>
                        <img src={vision} className='w-12 h-12 rounded-full' alt="Profile Picture" />
                        <div>
                            <h2 className='font-semibold capitalize'>{profileInfo?.data?.personalInfo?.firstName} {profileInfo?.data?.personalInfo?.lastName}</h2>
                            <p className='text-sm text-gray-700'>{user?.email}</p>
                        </div>
                    </div>
                    <form onSubmit={handleUpdateProfile} className='mt-6 md:space-y-3 space-y-1'>
                        <div className='flex flex-col md:flex-row gap-3'>
                            <div className='w-full md:w-1/2'>
                                <label className='text-sm font-medium text-gray-700 block'>First Name</label>
                                <input disabled={!updateProfile}  name='first-name' defaultValue={profileInfo?.data?.personalInfo?.firstName ? profileInfo?.data?.personalInfo?.firstName : ""} type="text" className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]' />
                            </div>
                            <div className='w-full md:w-1/2'>
                                <label className='text-sm font-medium text-gray-700 block'>Last Name</label>
                                <input disabled={!updateProfile} name='last-name' type="text" defaultValue={profileInfo?.data?.personalInfo?.firstName ? profileInfo?.data?.personalInfo?.lastName : ""} className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]' />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-3'>
                            <div className='w-full md:w-1/2'>
                                <label className='text-sm font-medium text-gray-700 block'>Email Address</label>
                                <input name='email' disabled defaultValue={user?.email} type="email" className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]'/>
                            </div>
                            <div className='w-full md:w-1/2'>
                                <label className='text-sm font-medium text-gray-700 block'>Phone Number</label>
                                <input disabled={!updateProfile} name='phone' type="number" defaultValue={user?.phone ? user?.phone : ""} className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]'/>
                            </div>
                        </div>
                        <div className='w-full'>
                                <label className='text-sm font-medium text-gray-700 block'>Street Address</label>
                                <input disabled={!updateProfile} name='street' type="text" defaultValue={profileInfo?.data?.contactInfo?.address ? profileInfo?.data?.contactInfo?.address : ""} className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]' placeholder={"12 street road"} />
                        </div>
                        <div className="grid md:grid-cols-3 gap-3 grid-cols-1">
                            <div>
                                <label className='text-sm font-medium text-gray-700 block'>City</label>
                                <input disabled={!updateProfile} name='city' type="text" defaultValue={profileInfo?.data?.contactInfo?.city ? profileInfo?.data?.contactInfo?.city : ""} className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]' placeholder={"New York"} />
                            </div>
                            <div>
                                <label className='text-sm font-medium text-gray-700 block'>State</label>
                                <input disabled={!updateProfile} name='state' defaultValue={profileInfo?.data?.contactInfo?.state ? profileInfo?.data?.contactInfo?.state : ""} type="text" className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]' placeholder={"NY"} />
                            </div>
                            <div>
                                <label className='text-sm font-medium text-gray-700 block'>ZIP Code</label>
                                <input disabled={!updateProfile} defaultValue={profileInfo?.data?.contactInfo?.zipCode ? profileInfo?.data?.contactInfo?.zipCode : ""} name='zip' type="text" className='appearance-none px-4 py-1 outline-none border border-gray-400 w-full rounded-sm text-[15px]' placeholder={"5010"} />
                            </div>
                        </div>
                        <div className={`${updateProfile ? "block" : "hidden"}`}>
                            <div className="flex justify-center items-center mt-5">
                                <button className="cursor-pointer bg-red-950 px-3 rounded-sm py-2 text-gray-200 text-sm font-semibold">Update Now</button>
                            </div>
                        </div>
                    </form>

                    {/* modal for password change */}
                    <dialog id="my_modal_7" className="modal">
                        <LenderPasswordChangeModal></LenderPasswordChangeModal>
                    </dialog>
                </div>
    );
};

export default Settings;