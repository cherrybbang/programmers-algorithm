// 수박수박수박
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
// 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

function solution(n) {
  return '수박'.repeat(n).substring(0, n);   
}


// substring 메소드란?
// substring(0, n)은 문자열의 0번째 인덱스부터 n번째 인덱스 전까지의 부분 문자열을 반환합니다.
// 예시:
// let str = "Hello, World!";
// let result = str.substring(0, 5); ---> "Hello"
// let result = str.substring(7); ---> "World!"

// repeat 메소드란?
// repeat(n)은 문자열을 n번 반복한 새로운 문자열을 반환합니다.
// 예시:
// let str = "abc";
// let result = str.repeat(3); ---> "abcabcabc"