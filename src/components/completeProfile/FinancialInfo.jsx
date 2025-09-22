import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useAuthContext } from "../../providers/AuthProviders";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const FinancialInfo = ({step, setStep, personalInfo, contactInfo}) => {
  const [existingLoan, setExistingLoan] = useState(null);
  const axiosPublic = useAxiosPublic();
  const {user} = useAuthContext();
  const userId = user?._id;
  const navigate = useNavigate();
  // console.log(userId);
  // console.log(personalInfo, contactInfo);

  const handleApplicationSubmit = (e) =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const annualIncome = Number(form.get('annual-income'));
    const valueOfLandOwnership = Number(form.get('value-of-land'));
    const electricityBill = Number(form.get('electricity-bill'));
    const mobileMoneyBalance = Number(form.get('mobile-money-balance'));
    const existingLoanAmount = Number(form.get('existing-loan'));
    const terms = form.get('terms');
    const financialInfo = {
      annualIncome, valueOfLandOwnership, electricityBill, mobileMoneyBalance, existingLoanAmount, terms, existingLoan
    }
    const clientInfo = {
      personalInfo, contactInfo, financialInfo
    }
    // console.log(clientInfo);
    axiosPublic.patch(`/api/v1/profile/${userId}`, {clientInfo})
      .then(response =>{
        toast.success(response?.data?.message);
        navigate('/dashboard')
      })
      .catch(error =>{
        toast.error(error?.response?.data?.message);
      })
  }
  return (
    <div>
      <h2 className="text-xl font-semibold text-red-950 mb-3">
        Financial Information
      </h2>
      <form onSubmit={handleApplicationSubmit} className="mt-5 md:space-y-3 space-y-1">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full md:w-1/2">
            <label className="text-sm font-medium text-gray-700 block">
              Annual Income (FCFA)
            </label>
            <input
              name="annual-income"
              type="number"
              className="appearance-none px-4 py-2 outline-none border border-gray-400 w-full rounded-sm text-[15px]"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-sm font-medium text-gray-700 block">
              Value of land ownership (FCFA)
            </label>
            <input
              name="value-of-land"
              type="number"
              className="appearance-none px-4 py-2 outline-none border border-gray-400 w-full rounded-sm text-[15px]"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full md:w-1/2">
            <label className="text-sm font-medium text-gray-700 block">
              Electricity bill (FCFA)
            </label>
            <input
              name="electricity-bill"
              type="number"
              required
              className="appearance-none px-4 py-2 outline-none border border-gray-400 w-full rounded-sm text-[15px]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-sm font-medium text-gray-700 block">
              Mobile money balance
            </label>
            <input
              name="mobile-money-balance"
              type="number"
              required
              className="appearance-none px-4 py-2 outline-none border border-gray-400 w-full rounded-sm text-[15px]"
            />
          </div>
        </div>
        <div className="flex items-center gap-7">
          <label className="text-red-950 font-semibold">Existing Loan</label>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <input
                onChange={(e) => setExistingLoan(e.target.value)}
                type="radio"
                name="radio"
                value={"yes"}
                className="radio radio-sm text-red-950"
              />
              <p className="text-sm">Yes</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                onChange={(e) => setExistingLoan(e.target.value)}
                name="radio"
                value={"no"}
                className="radio radio-sm text-red-950"
              />
              <p className="text-sm">No</p>
            </div>
          </div>
        </div>
        <div>
          {existingLoan === "yes" && (
            <div className="w-full md:w-1/2">
              <label className="text-md font-thin text-red-950 block mb-1">
                Enter Amount
              </label>
              <input
                name="existing-loan"
                type="number"
                required
                className="appearance-none px-4 py-2 outline-none border border-gray-400 w-full rounded-sm text-[15px]"
                placeholder="Enter your first name"
              />
            </div>
          )}
        </div>
        <div className="flex items-center mt-7">
          <input type="checkbox" name="terms" className="mr-2 leading-tight" />
          <label className="text-sm font-medium text-gray-500">
            I agree to share my data with GUEHI AND CO to process my credit
            score
          </label>
        </div>
        <div className="flex justify-between">
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 rounded bg-gray-300 disabled:opacity-50 flex items-center gap-2 cursor-pointer"
              >
                <MdArrowBackIosNew /> Back
              </button> 
              <button
                type="submit"
                className="px-4 py-2 rounded bg-red-950 text-white disabled:opacity-50 cursor-pointer"
              >
                Submit Application
              </button>
                      </div>
      </form>
      
    </div>
  );
};
export default FinancialInfo;
