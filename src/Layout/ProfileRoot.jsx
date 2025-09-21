import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuthContext } from '../providers/AuthProviders';
import { CiCreditCardOff, CiLock } from 'react-icons/ci';
import { PiSignOutFill } from "react-icons/pi";
import { FiUser } from 'react-icons/fi';
import { useState } from 'react';
import useProfileInfo from '../hooks/useProfileInfo';

const ProfileRoot = () => {
    const navigate = useNavigate();
    const {user} = useAuthContext();
    const {pathname} = useLocation();
    const [isActive, setIsActive] = useState(pathname);
    const {profileInfo} = useProfileInfo();
    // console.log(profileInfo?.data?.personalInfo?.firstName);
    const handleSignOut = () =>{
        localStorage.removeItem("user");
        navigate('/');
        window.location.reload();
    }
    
    // console.log(pathname);
    return (
        <div className='bg-gray-100 min-h-screen py-6 md:py-8 lg:py-10 px-3 md:px-16 lg:px-20'>
            <div className='mb-6 md:mb-8 lg:mb-10'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-red-950'>Account Settings</h1>
                <p className='text-sm text-gray-600'>Manage your accout preferences and information</p>
            </div>
            <div className='flex justify-center flex-col md:flex-row items-start gap-5'>
                <div className='w-full md:w-[40%] lg:w-[45%] bg-white rounded-sm p-4 shadow-md'>
                    <div className='flex items-center gap-6 border-b border-gray-300 pb-6'>
                        <img src={logo} alt="Logo" className='w-12 h-12 rounded-full border border-blue-500'/>
                        <div>
                            <h2 className='text-xl font-semibold'>{`${profileInfo?.data?.personalInfo?.firstName} ${profileInfo?.data?.personalInfo?.lastName}`}</h2>
                            <p className='text-gray-700 text-sm'>{user?.email}</p>
                        </div>
                    </div>
                    <div className='mt-6 border-b border-gray-300 pb-6'>
                        <ul className='md:space-y-2 space-y-1 text-[15px] font-medium'>
                            {
                                profileLinks.map(link => 
                                    <li key={link?.id}>
                                        <NavLink onClick={() => setIsActive(link?.route)} className={`${isActive === link?.route ? 'bg-gray-200 border border-gray-500' : ''} w-full flex items-center gap-3 py-2 px-3 rounded-sm`} to={`${link?.route}`} end>{link?.icon}{link?.title}</NavLink>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className='mt-6'>
                        <button onClick={handleSignOut} className='flex items-center gap-3 font-medium text-red-600 cursor-pointer text-[16px]'><PiSignOutFill size={19}/>Sign Out</button>
                    </div>
                </div>
                <div className='w-full'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};
const profileLinks = [
    {
        id: 1,
        title: "Personal Information",
        route: "/profile",
        icon: <FiUser/>
    },
    {
        id: 2,
        title: "Security",
        route: "/profile/security",
        icon: <CiLock/>
    },
    {
        id: 3,
        title: "Loan Status",
        route: "/profile/loan-status",
        icon: <CiCreditCardOff/>
    }
]
export default ProfileRoot;