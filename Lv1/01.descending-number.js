// 정수 내림차순으로 배치하기
function solution(n) {
    const num = String(n);
    let newArr = Array.from(num);
    newArr.sort((a, b) => b - a);
    return Number(newArr.join(''));
}

console.log(solution(118372));


// 다른 풀이
// function solution(n) {
//   return Number(
//     String(n)
//       .split("")
//       .sort((a, b) => b - a)
//       .join("")
//   );
// }