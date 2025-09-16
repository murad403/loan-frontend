
export const getCreditScore = (income) =>{
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