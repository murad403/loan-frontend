import React, { useState } from "react";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useAuthContext } from "../../providers/AuthProviders";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LenderPasswordChangeModal = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const axiosPublic = useAxiosPublic();
    const {user} = useAuthContext();
    const email = user?.email;

    const handleChangePassword = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const currentPassword = form.get("current-password");
        const newPassword = form.get("new-password");
        const confirmNewPassword = form.get("confirm-new-password");
        if(newPassword !== confirmNewPassword){
            return toast.error("Enter the same password, new password and confirm new password");
        }
        const newUpdatedPassword = {
            email,
            currentPassword,
            newPassword,
            confirmNewPassword
        }
        axiosPublic.patch("/api/v1/user/security", newUpdatedPassword)
            .then(response =>{
                toast.success(response.data.message);
                e.target.reset();
            })
            .catch(error =>{
                toast.error(error?.response?.data?.message);
            })
        // console.log(newUpdatedPassword);
    }
  return (
        <div className="modal-box w-11/12 max-w-1xl">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <form onSubmit={handleChangePassword} className="mt-5 md:space-y-3 space-y-1 md:px-2">
              <div className="relative">
                <label className="text-sm font-semibold text-red-950">Current Password</label>
                <input
                    type={showPassword ? "text" : "password"}
                    name="current-password"
                    className="w-full appearance-none outline-none border border-gray-200 rounded-sm py-2 px-4 text-sm font-medium"
                    placeholder="....................."
                  />
                <p
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-[37px] cursor-pointer"
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </p>
              </div>
              <div className="relative">
                <label className="text-sm font-semibold text-red-950">New Password</label>
                <input
                    type={showNewPassword ? "text" : "password"}
                    name="new-password"
                    className="w-full appearance-none outline-none border border-gray-200 rounded-sm py-2 px-4 text-sm font-medium"
                    placeholder="....................."
                  />
                <p
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-2 top-[37px] cursor-pointer"
                >
                  {showNewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </p>
              </div>
              <div className="relative">
                <label className="text-sm font-semibold text-red-900">Confirm New Password</label>
                <input
                    type={showConfirmNewPassword ? "text" : "password"}
                    name="confirm-new-password"
                    className="w-full appearance-none outline-none border border-gray-200 rounded-sm py-2 px-4 text-sm font-medium"
                    placeholder="....................."
                  />
                <p
                  onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                  className="absolute right-2 top-[37px] cursor-pointer"
                >
                  {showConfirmNewPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </p>
              </div>
              <div className="flex justify-center items-center mt-4 md:mt-0">
                              <button className="cursor-pointer bg-red-950 px-3 rounded-sm py-2 text-gray-200 text-sm font-semibold">Save Changes</button>
                          </div>
            </form>
    </div>
  );
};

export default LenderPasswordChangeModal;
