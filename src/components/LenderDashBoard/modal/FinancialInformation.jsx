import { TfiMoney } from "react-icons/tfi";
import { RiPriceTagLine } from "react-icons/ri";
import { CiWallet } from "react-icons/ci";
import { GoCreditCard } from "react-icons/go";
import { MdOutlineBookOnline } from "react-icons/md";

const FinancialInformation = ({ financialInfo }) => {
  // console.log(financialInfo);
  return (
    <div className="mt-7 border-b border-gray-300 pb-7">
      <h2 className="text-red-900 text-lg font-semibold">
        Financial Information
      </h2>
      <div className="mt-4 flex md:gap-20 gap-3 flex-col md:flex-row">
        <div className="flex gap-2 flex-col md:flex-row">
          <div>
            <div className="text-sm flex items-center gap-1">
              <TfiMoney />
              <p>Annual Income (FCFA): {financialInfo?.annualIncome}</p>
            </div>
            <div className="text-sm flex items-center gap-1">
              <RiPriceTagLine />
              <p>Value of Land Ownership (FCFA): {financialInfo?.valueOfLandOwnership}</p>
            </div>
            <div className="text-sm flex items-center gap-1">
              <MdOutlineBookOnline />
              <p>Mobile Money Balance (FCFA): {financialInfo?.mobileMoneyBalance}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-sm flex items-center gap-1">
            <CiWallet />
            <p>Existing Loans: <b>{financialInfo?.existingLoan}</b></p>
          </div>
          <div className="text-sm flex items-center gap-1">
            <GoCreditCard />
            <p>Credit Card Debt: {financialInfo?.loanAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialInformation;
