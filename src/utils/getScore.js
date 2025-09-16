export const getScore = (amount, maxScore) =>{
        // const maxScore = 30;
        const score = Math.round((amount / 100000) * maxScore);
        return score > maxScore ? maxScore : score;
    }