// 문자열 다루기 기본
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

function solution(s) {
    const isNumber = /^\d+$/.test(s);
    
    if (s.length === 4 || s.length === 6) {
        return isNumber ? true : false;
    } else {
        return false;
    }
}


// 다른 풀이
function solution(s) {
  const isValidLength = s.length === 4 || s.length === 6;
  const isNumber = /^\d+$/.test(s);

  return isValidLength && isNumber;
}

// 시간을 소요한 부분
// 처음에는 isNaN() 함수를 사용하여 숫자인지 확인하려고 했다. 그런데 isNaN() 함수는 공백이나 특정 특수문자를 숫자로 인식하는 경우가 있어서 정확하지 않았다. 그래서 정규 표현식을 사용하여 문자열이 오직 숫자로만 구성되어 있는지 확인하는 방법으로 변경했다.
Number("12e3") // 12000
isNaN("12e3")  // false

Number("")    // 0
Number(" ")   // 0
Number("   ") // 0

// const isNumber = !isNaN(s);