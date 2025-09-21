import { getRiskAssessment } from "../../../utils/getRiskAssessment";
import { VscGraph } from "react-icons/vsc";



const RiskAssessment = ({financialInfo}) => {
    // console.log(financialInfo);
    const totalDebit = Number(financialInfo?.annualIncome) + Number(financialInfo?.electricityBill) + Number(financialInfo?.mobileMoneyBalance) + Number(financialInfo?.valueOfLandOwnership) + Number(financialInfo?.existingLoanAmount);
    const monthlyIncome = Math.floor(financialInfo?.annualIncome / 12);
    const monthlyDebit = Math.floor(totalDebit / 12);
    const debitToIncomeRatio = Math.floor((monthlyIncome / monthlyDebit) * 100);
    const risk = getRiskAssessment(debitToIncomeRatio);
    // console.log(risk);
    // console.log(debitToIncomeRatio);
    return (
        <div className='bg-gray-100 rounded-sm border border-gray-200 p-3'>
            <h2 className='text-red-950'>Risk Assessment</h2>
            <div className="mt-4 space-y-3 border-b border-gray-300 pb-5">
                <div className="text-sm flex justify-between items-center">
                <h3 className="text-gray-600">Debt-to-Income-Ratio</h3>
                <p className="font-semibold">{debitToIncomeRatio}%</p>
            </div>
            <div className="text-sm flex justify-between items-center">
                <h3 className="text-gray-600">Monthly Income</h3>
                <p className="font-semibold">${monthlyIncome}</p>
            </div>
            <div className="text-sm flex justify-between items-center">
                <h3 className="text-gray-600">Total Debt</h3>
                <p className="font-semibold">${totalDebit}</p>
            </div>
            </div>
            <div className="flex items-center gap-2 text-sm mt-5">
                <VscGraph size={20}/>
                <p>Overall Risk: <span className="text-green-500">{risk}</span></p>
            </div>
        </div>
    );
};

export default RiskAssessment;