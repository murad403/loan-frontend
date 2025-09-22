import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../hooks/useAxiosPublic";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const phone = Number(form.get('phone'));
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');
        const terms = form.get('terms');
        if(password !== confirmPassword){
            return toast.error("Enter the same password");
        }
        if(!terms){
            return toast.error("You must accept the terms and conditions");
        }
        const clientInfo = {
            email, phone, password, terms
        }
        // console.log(clientInfo);
        axiosPublic.post("/api/v1/user/sign-up", {clientInfo})
            .then(response =>{
                // console.log(response);
                toast.success(response.data.message);
                navigate("/sign-in")
            })
            .catch(error =>{
                // console.log(error);
                toast.error(error.response.data.message);
            })
    }
    return (
        <div className='bg-gray-100 min-h-screen flex items-center justify-center px-5'>
            <div className='w-full md:w-[60%] lg:w-[40%] border border-gray-300 rounded-md bg-white shadow-xl p-4 md:p-8 lg:p-5'>
                <h1 className='text-center text-red-950 font-semibold text-xl'>Create An Account</h1>
                <form onSubmit={handleSignUp} className="space-y-3">
                    <div>
                        <label className='text-sm font-semibold text-red-900'>Email</label>
                        <div className="relative">
                            <input type="email" name='email' className='w-full appearance-none outline-none border border-gray-200 rounded-sm py-1 px-4 pl-8 text-sm font-medium' placeholder="Enter your email" required/>
                            <MdOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                    <div>
                        <label className='text-sm font-semibold text-red-900'>Phone Number</label>
                        <div className="relative">
                            <input type="number" name='phone' className='w-full appearance-none outline-none border border-gray-200 rounded-sm py-1 px-4 pl-8 text-sm font-medium' placeholder="Enter your phone number" required/>
                            <MdOutlinePhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                    </div>
                    <div className="relative">
                        <label className='text-sm font-semibold text-red-900'>Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name='password' className='w-full appearance-none outline-none border border-gray-200 rounded-sm py-1 px-4 pl-8 text-sm font-medium' placeholder="Create a password" required/>
                            <CiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <p onClick={() => setShowPassword(!showPassword)} className="absolute right-2 top-[32px] cursor-pointer" >
                                {
                                    showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                                }
                            </p>
                    </div>
                    <div className="relative">
                        <label className='text-sm font-semibold text-red-900'>Confirm Password</label>
                        <div className="relative">
                            <input type={showConfirmPassword ? "text" : "password"} name='confirmPassword' className='w-full appearance-none outline-none border border-gray-200 rounded-sm py-1 px-4 pl-8 text-sm font-medium' placeholder="Confirm password" required/>
                            <CiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <p onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-2 top-[32px] cursor-pointer" >
                                {
                                    showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                                }
                            </p>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" name='terms' className='mr-2 leading-tight' />
                        <label className='text-sm font-medium text-gray-500'>I agree to the Privacy Policy  and Terms of service </label>
                    </div>
                    <button type="submit" className="w-full bg-red-950 text-white text-sm  py-2 rounded-sm cursor-pointer">Sign Up</button>
                    <div className="flex items-center gap-2 text-sm justify-center">
                        <p>Already You Have Account?</p>
                        <Link className="text-red-950 font-semibold" to={"/sign-in"}>Sign In Here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;