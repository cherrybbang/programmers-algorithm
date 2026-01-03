// 가운데 글자 가져오기

function solution(s) {
  const len = s.length;
  const mid = Math.floor(len / 2);

  // 길이가 홀수면 가운데 1글자,
  // 짝수면 가운데 2글자
  return len % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}