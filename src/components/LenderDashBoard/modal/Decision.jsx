import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Decision = ({email}) => {
    const axiosPublic = useAxiosPublic();
  const [isApprove, setIsApprove] = useState(null);
  const handleLoanSubmission = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const loanAmount = Number(form.get("loan-amount"));
    const interestRate = Number(form.get("interest-rate"));
    const terms = form.get("terms");
    const notes = form.get("notes");
    const status = isApprove ? "approve" : "reject";
    const clientInfo = {
        loanAmount, interestRate, terms: terms ? terms : "3", notes, status, email
    }
    console.log(status);
    axiosPublic.post('/api/v1/creditDecision', {clientInfo})
        .then(response =>{
            toast.success(response?.data?.message);
        })
        .catch(error =>{
            toast.error(error?.response?.data?.message);
        })
  };
  return (
    <div className="mt-3">
      <h2 className="text-red-900 text-lg font-semibold">Decision</h2>
      <div className="mt-1 flex items-center gap-5">
        <button
          onClick={() => setIsApprove(true)}
          className={`flex items-center px-3 py-1 cursor-pointer text-green-500 bg-green-100 rounded-sm gap-3 border ${
            isApprove ? "bg-green-500 text-white" : ""
          } border-green-500 text-sm`}
        >
          <FaCheck />
          Approve
        </button>
        <button
          onClick={() => setIsApprove(false)}
          className={`flex items-center px-3 py-1 cursor-pointer text-red-500 bg-red-100 rounded-sm gap-3 border ${
            isApprove == false ? "bg-red-500 text-white" : ""
          } border-red-500 text-sm`}
        >
          <RxCross2 />
          Reject
        </button>
      </div>
      <div className="mt-3">
        <h2 className="text-red-900 text-lg">Approval Details</h2>
        <form onSubmit={handleLoanSubmission} className="mt-1">
          {
            isApprove && <div className="bg-blue-50 px-3 py-2 rounded-sm">
            <div className="flex items-center gap-5">
              <div className="md:w-1/2">
                <label className="block text-sm font-semibold">
                  Loan Amount($)
                </label>
                <input
                  name="loan-amount"
                  type="number"
                  required
                  className="appearance-none w-full outline-none border border-gray-400 py-2 px-4 rounded-sm mt-1"
                />
              </div>
              <div className="md:w-1/2">
                <label className="block text-sm font-semibold">
                  Interest Rate(%)
                </label>
                <input
                  type="number"
                  name="interest-rate"
                  required
                  className="appearance-none w-full outline-none border border-gray-400 py-2 px-4 rounded-sm mt-1"
                />
              </div>
            </div>
            <div className="w-full mt-2">
              <label className="block text-sm font-semibold">
                Terms(Months)
              </label>
              <select
                name="terms"
                required
                className="appearance-none w-full outline-none border border-gray-400 py-2 px-4 rounded-sm mt-1"
              >
                <option value="">Select Term</option>
                <option value="3">3 Months</option>
                <option value="6">6 Months</option>
                <option value="12">12 Months</option>
                <option value="24">24 Months</option>
                <option value="36">36 Months</option>
              </select>
            </div>
          </div>
          }
          <div className="mt-3">
                <h2 className="text-red-900 text-[15px]">Notes</h2>
            <textarea
              name="notes"
              id="notes"
              required
              placeholder={`${
                isApprove === false
                  ? "Please provide a reason for rejection..."
                  : "Add any notes about this dicision..."
              }`}
              className={`w-full h-[70px] outline-none bg-gray-100 rounded-sm ${
                isApprove === false && "bg-red-50"
              } text-sm px-3 py-2`}
            ></textarea>
            </div>
          <button
            type="submit"
            className="bg-red-950 text-gray-300 text-sm px-3 py-2 rounded-sm mt-2 cursor-pointer flex gap-2 items-center"
          >
            { isApprove ? <FaCheck /> : <RxCross2 />}  Submit Decision 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Decision;
