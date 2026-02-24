function solution(n) {
  let newNumber = n.toString(3).split('').reverse().join('');
  return parseInt(newNumber, 3);
}

n.toString(3)     // 3진법 문자열로 변환
 .split('')       // 문자 배열로 분할
 .reverse()       // 배열 뒤집기
 .join('')        // 문자열로 재결합