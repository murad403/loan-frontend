import { TfiMoney } from "react-icons/tfi";

const CreditLimit = ({fafcBalance, creditInfo}) => {
    const handleSubmitApplication = e =>{
        e.preventDefault(0);
        const form = new FormData(e.target);
        const loanAmount = form.get("loan-amount");
        console.log(loanAmount);
    }
    // console.log(fafcBalance);
    return (
        <div>
            <h3 className='bg-gray-200 p-4 font-bold rounded-t-sm'>Suggest Credit Limit</h3>
            <div className='px-4 py-7'>
                <div className="flex items-center flex-col md:gap-5 gap-3">
                    <div className="bg-gray-100 p-3 rounded-full">
                        <TfiMoney className="text-red-950 bg-gray-100" size={25}></TfiMoney>
                    </div>
                    <h4 className="text-md font-semibold">FCFA {fafcBalance?.toLocaleString()}</h4>
                    <p className="text-sm text-gray-700">Based on your credit score of {creditInfo?.creditScore}/100</p>
                </div>
                <div className="bg-gray-100 rounded-sm p-3 space-y-3 mt-7">
                    <h2 className="text-md font-semibold">Credit Limit Ranges</h2>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-700">Excellent(80-100):</p>
                        <h4 className="text-[14px] font-semibold text-gray-700">FCFA 100,000</h4>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-700 ">Good(60-79):</p>
                        <h4 className="text-[14px] font-semibold text-gray-700">FCFA 50,000</h4>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-700">Fair(40-59):</p>
                        <h4 className="text-[14px] font-semibold text-gray-700">FCFA 30,000</h4>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-700">Poor(0-39):</p>
                        <h4 className="text-[14px] font-semibold text-gray-700">FCFA 10,000</h4>
                    </div>
                </div>
                <div className="mt-5 flex items-center gap-3">
                    <input type="checkbox" required name="terms"/>
                    <label htmlFor="" className="text-sm text-gray-700">I agree to share my data with partner financial insituations for my credit application</label>
                </div>
                <form onSubmit={handleSubmitApplication} className="mt-5">
                    <div className="space-y-2">
                        <label htmlFor="" className="block text-gray-600">Enter Loan Amount</label>
                        <input type="number" name="loan-amount" className="appearance-none outline-none border border-gray-400 rounded-sm py-2 px-3 w-full" placeholder="Enter your amount"/>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                        <button type="submit" className="py-[6px] px-3 bg-red-950 cursor-pointer rounded-sm text-sm text-gray-300">Submit Application</button>
                    </div>
                </form>
            </div>   
        </div>
    );
};

export default CreditLimit;