// 두 정수 사이의 합

// 해결 및 고민과정
// 1. 매개변수 a와 b의 값을 비교하여 시작값(최소)과 끝값(최대) 구해서 기준을 잡았다.
// 2. for문을 사용하여 시작값부터 끝값까지 반복하면서 sum 변수에 값을 누적시켰다.

function solution(a, b) {
  let sum = 0;
  const start = Math.min(a, b);
  const end = Math.max(a, b);

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}