// 나누어 떨어지는 숫자 배열
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 해결 및 고민과정
// 1. 우선 나머지가 0이 되는 값을 찾기 위해 filter() 메서드를 사용했다.
// 2. 그런 다음 sort() 메서드를 사용하여 오름차순으로 정렬했다.
// 3. 나누어 떨어지는 값이 하나도 없을 경우를 대비해 조건문을 작성하여, 결과 배열의 길이가 0일 때는 [-1]을 반환하도록 했다.

function solution(arr, divisor) {
  const result = arr
    .filter(num => num % divisor === 0)
    .sort((a, b) => a - b);

  return result.length ? result : [-1];
}