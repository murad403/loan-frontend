import CreditScore from '../components/ClientDashBoard/CreditScore';
import CreditLimit from '../components/ClientDashBoard/CreditLimit';
import ApplicationStatus from '../components/ClientDashBoard/ApplicationStatus';
import FinancialSummary from '../components/ClientDashBoard/FinancialSummary';
import RecentActivity from '../components/ClientDashBoard/RecentActivity';
import useProfileInfo from '../hooks/useProfileInfo';

const ClientDashboard = () => {
    const {profileInfo} = useProfileInfo();
    const financialInfo = profileInfo?.data?.financialInfo;
    // console.log(financialInfo);
    let fafcBalance;
    if(financialInfo?.existingLoan === "yes"){
        let totalBalance = financialInfo?.valueOfLandOwnership + financialInfo?.mobileMoneyBalance + financialInfo?.existingLoanAmount + financialInfo?.electricityBill + financialInfo?.annualIncome;
        fafcBalance = totalBalance / 5;
    }
    if(financialInfo?.existingLoan === "no"){
        let totalBalance = financialInfo?.valueOfLandOwnership + financialInfo?.mobileMoneyBalance + financialInfo?.electricityBill + financialInfo?.annualIncome;
        fafcBalance = totalBalance / 4;
    }

    const getCreditScore = (income) =>{
        if (income >= 100000){
            return {creditScore: 100, creditTag: "Excellent"};
        };
    if (income >= 50000) {
      const minIncome = 50000;
      const maxIncome = 99999;
      const minScore = 60;
      const maxScore = 79;
      const creditScore = Math.round(((income - minIncome) / (maxIncome - minIncome)) * (maxScore - minScore) + minScore)
      return {creditScore, creditTag: "Good"};
    }
    if (income >= 30000) {
      const minIncome = 30000;
      const maxIncome = 49999;
      const minScore = 40;
      const maxScore = 59;
      const creditScore = Math.round(((income - minIncome) / (maxIncome - minIncome)) * (maxScore - minScore) + minScore);
      return {creditScore, creditTag: "Fair"};
    }
    if (income >= 0) {
      const minIncome = 0;
      const maxIncome = 29999;
      const minScore = 0;
      const maxScore = 39;
      const creditScore = Math.round(((income - minIncome) / (maxIncome - minIncome)) * (maxScore - minScore) + minScore);
      return {creditScore, creditTag: "Poor"};
    }
    return 0;
    }
    const creditInfo = getCreditScore(fafcBalance);
    const getScore = (amount, maxScore) =>{
        // const maxScore = 30;
        const score = Math.round((amount / 100000) * maxScore);
        return score > maxScore ? maxScore : score;
    }
    const annualIncome = getScore(financialInfo?.annualIncome, 30);
    const electricityBill = getScore(financialInfo?.electricityBill, 30);
    const mobileMoneyBalance = getScore(financialInfo?.mobileMoneyBalance, 30);
    const factorsAffectingScore = {
        annualIncome, electricityBill, mobileMoneyBalance
    }
    const debitToIncomeRatio = getScore(fafcBalance, 17);
    // console.log(factorsAffectingScore);
    
    return (
        <div className='bg-gray-100 px-4 md:px-16 py-5 md:py-10 space-y-7'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-red-950'>M. GUEHI - Dashboard</h1>
            <div className='flex flex-col md:flex-row gap-4 md:mt-10 mt-5'>
                <div className='w-full md:w-[70%] bg-white rounded-sm shadow-lg'>
                    <CreditScore creditInfo={creditInfo} factorsAffectingScore={factorsAffectingScore}></CreditScore>
                </div>
                <div className='w-full md:w-[30%] space-y-3'>
                    <div className='bg-white rounded-sm shadow-lg'>
                        <CreditLimit fafcBalance={fafcBalance} creditInfo={creditInfo}></CreditLimit>
                    </div>
                    <div className='bg-white rounded-sm shadow-lg'>
                        <ApplicationStatus></ApplicationStatus>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-sm shadow-lg'>
                <FinancialSummary financialInfo={financialInfo} debitToIncomeRatio={debitToIncomeRatio}></FinancialSummary>
            </div>
            <div className='bg-white rounded-sm shadow-lg'>
                <RecentActivity></RecentActivity>
            </div>
        </div>
    );
};

export default ClientDashboard;