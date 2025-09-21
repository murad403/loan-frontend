import {Progress} from 'antd';
import { getScore } from '../../../utils/getScore';

const LenderCreditScore = ({financialInfo}) => {
    // console.log(financialInfo);
    const annualIncomeScore = getScore(financialInfo?.annualIncome, 100);
    const electricityBillScore = getScore(financialInfo?.electricityBill, 100);
    const mobileMoneyBalanceScore = getScore(financialInfo?.mobileMoneyBalance, 100);
    // console.log(annualIncomeScore, electricityBillScore, mobileMoneyBalanceScore);
    return (
        <div>
            <div className='bg-gray-100 rounded-sm border border-gray-200 p-3'>
            <h2 className='text-red-950'>Credit Score</h2>
            <div className='flex justify-center mt-5'>
                    <Progress type="dashboard" gapDegree={120} steps={10} percent={financialInfo?.creditScore} trailColor="#D3D3D3" strokeColor={"green"} strokeWidth={12} size={200} format={() => (
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "10px", color: "green", backgroundColor: "#D3D3D3", display: "inline-block", padding: "3px 9px" , borderRadius: "10px"}}>{financialInfo?.creditTag}</div>
                            <div>{financialInfo?.creditScore}</div>
                         </div>
                    )}/>
                </div>
                <div className='md:mt-9 mt-4 md:space-y-5 space-y-2'>
                        <div>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-red-950 font-semibold text-[14px]'>Annual Income (FCFA)</h3>
                                <p className='text-sm text-gray-700'>{annualIncomeScore}%</p>
                            </div>
                            <progress className="progress text-green-500 w-full" value={annualIncomeScore} max="100"></progress>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-red-950 font-semibold text-[14px]'>Electricity Bill (FCFA)</h3>
                                <p className='text-sm text-gray-700'>{electricityBillScore}%</p>
                            </div>
                            <progress className="progress text-blue-500 w-full" value={electricityBillScore} max="100"></progress>
                        </div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-red-950 font-semibold text-[14px]'>Mobile Money Balance (FCFA)</h3>
                                <p className='text-sm text-gray-700'>{mobileMoneyBalanceScore}%</p>
                            </div>
                            <progress className="progress text-yellow-500 w-full" value={mobileMoneyBalanceScore} max="100"></progress>
                        </div>
            </div>
            </div>
            
        </div>
    );
};

export default LenderCreditScore;