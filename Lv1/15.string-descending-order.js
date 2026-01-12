// 문자열 내림차순으로 배치하기
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

function solution(s) {
    return s
        .split('')
        .sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0))
        .join('');
}


// 다른 풀이
function solution(s) {
    return s.split('').sort().reverse().join('');
}

function solution(s) {
    return s
        .split('')
        .sort((a, b) => b > a ? 1 : -1)
        .join('');
}

// charCodeAt을 사용하는 이유: ASCII 값으로 명확하고 안정적인 정렬이 가능하기 때문.
// 아스키코드 : 컴퓨터가 영문 대소문자, 숫자, 특수 기호 등 문자를 인식하고 처리하기 위해 문자를 숫자(0~127)로 매핑한 표준 코드 체계.