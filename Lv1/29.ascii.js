function solution(s, n) {
    let result = '';
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char === ' ') {
            // 공백은 그대로 유지
            result += ' ';
        } else if (char >= 'A' && char <= 'Z') {
            // 대문자 처리
            const shifted = String.fromCharCode((char.charCodeAt(0) - 65 + n) % 26 + 65);
            result += shifted;
        } else if (char >= 'a' && char <= 'z') {
            // 소문자 처리
            const shifted = String.fromCharCode((char.charCodeAt(0) - 97 + n) % 26 + 97);
            result += shifted;
        }
    }
    
    return result;
}


// 풀이 설명
// 1. charCodeAt()으로 문자의 ASCII 코드를 구한다 (A=65, a=97)
// 2. 대문자(A=65~Z=90), 소문자(a=97~z=122) 범위 확인.
// 3. 각 범위에서 0~25 인덱스로 변환하고 n만큼 밀어준다.
// 4. % 26 연산으로 알파벳 범위를 순환하도록 해준다. (z 다음은 a)
// 5. String.fromCharCode()로 다시 문자로 변환.


charCodeAt() : 문자 → ASCII 코드

// 문자에서 ACII 코드 값을 반환.
console.log('A'.charCodeAt(0)); // 65
console.log('B'.charCodeAt(0)); // 66
console.log('a'.charCodeAt(0)); // 97

// 문자열에서 특정 위치의 문자 코드를 반환.
const str = "ABC";
console.log(str.charCodeAt(0)); // 65 ('A')
console.log(str.charCodeAt(1)); // 66 ('B')


String.fromCharCode() : ASCII 코드 → 문자

// ASCII 코드에서 문자로 반환.
console.log(String.fromCharCode(65)); // 'A'
console.log(String.fromCharCode(66)); // 'B' 
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // 'Hello'