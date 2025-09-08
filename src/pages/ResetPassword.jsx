import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";

const ResetPassword = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [sendOTP, setSendOTP] = useState(false);
  const [otpNumber, setOtpNumber] = useState([]);
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
    const otpNumbersNumber = Number(otpNumbersString);
    console.log(otpNumbersNumber);
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
          Reset Password
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
      {sendOTP && (
        <div
          className={`w-full md:w-[60%] lg:w-[35%] border border-gray-300 rounded-md bg-white shadow-xl p-4 md:p-8 lg:p-5`}
        >
          <h1 className="text-center text-red-950 font-semibold text-xl">
            Reset Password
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
    </div>
  );
};

export default ResetPassword;
