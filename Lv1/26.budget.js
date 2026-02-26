//  예산

function solution(d, budget) {
    // 1. 신청 금액이 작은 부서부터 정렬 => 예산을 최대한 많이 사용할 수 있도록
    d.sort((a, b) => a - b);
    
    let count = 0;
    let currentBudget = 0;
    
    // 2. 작은 금액부터 예산에 더하며 비교
    for (let i = 0; i < d.length; i++) {
        if (currentBudget + d[i] <= budget) {
            currentBudget += d[i];
            count++;
        } else {
            // 예산 초과 시 종료
            break;
        }
    }
    
    return count;
}


// 간결한 코드
function solution(d, budget) {
    d.sort((a, b) => a - b);
    
    let count = 0;
    let sum = 0;
    
    for (let amount of d) {
        if (sum + amount <= budget) {
            sum += amount;
            count++;
        } else break;
    }
    
    return count;
}