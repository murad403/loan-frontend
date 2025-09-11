import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuthContext } from '../providers/AuthProviders';
import { CiCreditCardOff, CiLock } from 'react-icons/ci';
import { PiSignOutFill } from "react-icons/pi";
import { FiUser } from 'react-icons/fi';
import { useState } from 'react';

const ProfileRoot = () => {
    const navigate = useNavigate();
    const {user} = useAuthContext();
    const [isActive, setIsActive] = useState(0);
    // console.log(user);
    const handleSignOut = () =>{
        // console.log('Sign out' );
        localStorage.removeItem("user");
        navigate('/');
        window.location.reload();
    }
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
                            <h2 className='text-xl font-semibold'>Md Murad</h2>
                            <p className='text-gray-700 text-sm'>{user?.email}</p>
                        </div>
                    </div>
                    <div className='mt-6 border-b border-gray-300 pb-6'>
                        <ul className='md:space-y-2 space-y-1 text-[15px] font-medium'>
                            <li>
                                <NavLink onClick={() => setIsActive(0)} className={`${isActive === 0 ? 'bg-gray-200 border border-gray-500' : ''} w-full flex items-center gap-3 py-1 px-3 rounded-sm`} to={'/profile'} end><FiUser />Personal Information</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setIsActive(1)} className={`${isActive === 1 ? 'bg-gray-200 border border-gray-500' : ''} w-full flex items-center gap-3 py-1 px-3 rounded-sm`} to={'/profile/security'}><CiLock />Security</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => setIsActive(2)} className={`${isActive === 2 ? 'bg-gray-200 border border-gray-500' : ''} w-full flex items-center gap-3 py-1 px-3 rounded-sm`} to={'/profile/loan-status'}><CiCreditCardOff />Loan Status</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='mt-6'>
                        <button onClick={handleSignOut} className='flex items-center gap-3 font-medium text-red-600 cursor-pointer text-[16px]'><PiSignOutFill size={19}/>Sign Out</button>
                    </div>
                </div>
                <div className='w-full bg-white rounded-sm px-3 py-5 shadow-md'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default ProfileRoot;