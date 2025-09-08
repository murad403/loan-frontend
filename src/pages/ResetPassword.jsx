import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otp] = useState(new Array(6).fill(""));
  const [sendOTP, setSendOTP] = useState(false);
  const [otpNumber, setOtpNumber] = useState([]);
  const [showResetPasswordSection, setShowResetPasswordSection] = useState(false);
// send otp number to email------------------
  const handleSendOTP = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setSendOTP(true);
    console.log(email);
  };

//   confirm otp number--------------------
const handleConfirmOTP = (e) => {
    e.preventDefault();
    const otpNumbersString = otpNumber.join("");
    // console.log(otpNumbersString);
    const otpNumbersNumber = Number(otpNumbersString);
    setShowResetPasswordSection(true);
    console.log(otpNumbersNumber);
    console.log(otpNumber.length);
  }

//   reset password----------------------
const handleResetPassword = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    const resetPassword = {
        password, confirmPassword
    }
    console.log(resetPassword);
}
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-5">
      {/* send OTP form */}
      <div
        className={`${
          sendOTP ? "hidden" : ""
        } w-full md:w-[60%] lg:w-[40%] border border-gray-300 rounded-md bg-white shadow-xl p-4 md:p-8 lg:p-5`}
      >
        <h1 className="text-center text-red-950 font-semibold text-xl">
          Forgot Password
        </h1>
        <form onSubmit={handleSendOTP} className="space-y-3">
          <div>
            <label className="text-sm font-semibold text-red-900">Email</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full appearance-none outline-none border border-gray-200 rounded-sm py-1 px-4 pl-8 text-sm font-medium"
                placeholder="Enter your email"
                required
              />
              <MdOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-red-950 text-white text-sm  py-2 rounded-sm cursor-pointer"
          >
            Send OTP
          </button>
        </form>
      </div>

      {/* reset otp form */}
      {(sendOTP && !showResetPasswordSection) && (
        <div
          className={`w-full md:w-[60%] lg:w-[35%] border border-gray-300 rounded-md bg-white shadow-xl p-4 md:p-8 lg:p-5`}
        >
          <h1 className="text-center text-red-950 font-semibold text-xl">
            Forgot Password
          </h1>
          <form onSubmit={handleConfirmOTP} className="space-y-3">
            <div>
              <label className="text-sm font-semibold text-red-900">
                Enter OTP
              </label>
              <div className="flex justify-between items-center">
                {otp.map((otp, index) => (
                  <input
                    key={index}
                    name="otp"
                    type="text"
                    onChange={(e) => setOtpNumber([...otpNumber, e.target.value])}
                    className="w-12 h-12 text-center border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-lg font-semibold"
                    required
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-red-950 text-white text-sm  py-2 rounded-sm cursor-pointer"
            >
              Continue
            </button>
          </form>
        </div>
      )}
    {
        showResetPasswordSection && <div className='w-full md:w-[60%] lg:w-[40%] border border-gray-300 rounded-md bg-white shadow-xl p-4 md:p-8 lg:p-5'>
                <h1 className='text-center text-red-950 font-semibold text-xl'>Forgot Password</h1>
                <form onSubmit={handleResetPassword} className="space-y-3">
                    <div className="relative">
                        <label className='text-sm font-semibold text-red-900'>Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name='password' className='w-full appearance-none outline-none border border-gray-200 rounded-sm py-1 px-4 pl-8 text-sm font-medium' placeholder="Create a password" />
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
                            <input type={showConfirmPassword ? "text" : "password"} name='confirmPassword' className='w-full appearance-none outline-none border border-gray-200 rounded-sm py-1 px-4 pl-8 text-sm font-medium' placeholder="Confirm password" />
                            <CiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <p onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-2 top-[32px] cursor-pointer" >
                                {
                                    showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />
                                }
                            </p>
                    </div>
                    <button type="submit" className="w-full bg-red-950 text-white text-sm  py-2 rounded-sm cursor-pointer">Confirm</button>
                </form>
            </div>
    }
    </div>
  );
};

export default ResetPassword;
