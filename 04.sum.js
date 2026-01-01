// 두 정수 사이의 합

function solution(a, b) {
  let sum = 0;
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}