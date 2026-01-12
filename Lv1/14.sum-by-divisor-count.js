// 약수의 개수와 덧셈
// 두 정수 left와 right가 매개변수로 주어집니다.
// left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 해결 및 고민과정
// 1. 완전제곱수는 약수의 개수가 홀수라는 점을 이용했다.
// 2. 완전제곱수란 어떤 정수를 제곱해서 얻은 수를 의미한다.
// 3. 예를 들어, 1, 4, 9, 16, 25 등이 완전제곱수이다.
// 4. 따라서 제곱근이 정수인 수는 약수의 개수가 홀수이므로 뺄셈을 하고,
// 5. 그렇지 않은 수는 약수의 개수가 짝수이므로 덧셈을 한다.

function solution(left, right) {
  let sum = 0;

  for (let i = left; i <= right; i++) {
    // 제곱근이 정수면 완전제곱수
    if (Number.isInteger(Math.sqrt(i))) {
      sum -= i; // 약수 개수 홀수 → 뺌
    } else {
      sum += i; // 약수 개수 짝수 → 더함
    }
  }

  return sum;
}


// Math.sqrt(i) - 숫자 i의 제곱근을 계산
// Number.isInteger() - 그 결과가 정수인지 확인