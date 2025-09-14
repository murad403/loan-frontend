import { TfiMoney } from "react-icons/tfi";
import { BiWallet } from "react-icons/bi";
import { VscGraph } from "react-icons/vsc";

const FinancialSummary = () => {
    return (
        <div>
            <h3 className='bg-gray-200 p-4 font-bold rounded-t-sm'>Financial Summary</h3>
            <div className='px-4 py-6 flex flex-col md:flex-row md:gap-7 gap-5 items-center'>
                <div className="bg-gray-50 rounded-sm w-full items-center p-3 flex gap-2 border border-gray-300">
                    <div className="bg-green-200 p-2 rounded-full">
                        <TfiMoney size={18} className="text-green-700"/>
                    </div>
                    <div>
                        <p className="text-sm text-gray-700">Annual income</p>
                        <h3 className="text-gray-900 text-[15px]">FCFA 500,000</h3>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-sm items-center p-3 w-full flex gap-2 border border-gray-300">
                    <div className="bg-red-200 p-2 rounded-full">
                        <BiWallet size={18} className="text-red-700"/>
                    </div>
                    <div>
                        <p className="text-sm text-gray-700">Value of Land ownership</p>
                        <h3 className="text-gray-900 text-[15px]">FCFA 500,000</h3>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-sm items-center p-3 w-full flex gap-2 border border-gray-300">
                    <div className="bg-yellow-200 p-2 rounded-full">
                        <VscGraph size={18} className="text-yellow-700"/>
                    </div>
                    <div>
                        <p className="text-sm text-gray-700">Debit to income Ratio</p>
                        <h3 className="text-gray-900 text-[15px]">FCFA 17/17</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancialSummary;