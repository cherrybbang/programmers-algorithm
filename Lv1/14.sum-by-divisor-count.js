// 약수의 개수와 덧셈

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