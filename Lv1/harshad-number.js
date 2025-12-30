// 하샤드 수
// 하샤드 수란, 그 수의 각 자릿수 숫자의 합으로 나누어 떨어지는 수를 말한다. (ex. 12 => 1 + 2 = 3, 12 % 3 == 0 => 하샤드 수)

// 해결 및 고민과정
// 1. 나머지가 0으로 return 되는 조건을 생각했다.
// 2. 일단 매개변수 x를 문자열로 변환 후 각 자릿수를 더하는 for문을 작성했다.
// 3. 더한 값이 x로 나누어 떨어지는지 조건문을 통해 확인 후 true, false를 반환하도록 했다.

function solution(x) {
    let answer = 0;
    const m = String(x);
    
    for (let i = 0; i < m.length; i++) {
        answer += parseInt(m[i]);
    }
    
   if (x % answer === 0) {
       return true;
   } else {
       return false;
   }
}