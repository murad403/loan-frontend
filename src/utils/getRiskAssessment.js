
export const getRiskAssessment = (debitToIncomeRatio) =>{
    if(debitToIncomeRatio >= 0 && debitToIncomeRatio <=36){
        return "Low";
    }
    else if(debitToIncomeRatio >= 37 && debitToIncomeRatio <=49){
        return "Medium";
    }else{
        return "High";
    }
}