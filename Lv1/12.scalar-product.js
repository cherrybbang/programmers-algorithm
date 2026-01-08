// 내적 공식 (= 두 벡터의 성분 끼리 곱한 후 더하기)
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. 
// a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 해결 및 고민과정
// 1. 두 배열의 길이가 같다고 했으니 for문으로 각 인덱스를 반복하도록 했다.
// 2. 각 인덱스의 값을 곱한 후 sum 변수에 누적시켰다.

function solution(a, b) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i] * b[i];
    }
    return sum;
}


// 다른 풀이
function solution(a, b) {
    return a.reduce((sum, v, i) => sum + v * b[i], 0);
}

function solution(a, b) {
    let sum = 0;
    a.forEach((v, i) => {
        sum += v * b[i];
    });
    return sum;
}

// reduce란, 배열 전체를 돌면서 '누적값'을 계속 업데이트해서 마지막에 값 하나만 남기는 함수이다.
[ 예시 ]
const nums = [2, 5, 7];
const total = nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
// accumulator: 누적값 (초기값은 1)
// currentValue: 현재 처리 중인 요소 값
// 위 예시에서는 배열의 모든 요소를 곱해서 total에 저장한다.