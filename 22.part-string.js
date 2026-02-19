// 부분문자열
function solution(t, p) {
    let count = 0;
    const pLength = p.length;
    const pValue = BigInt(p);
    // console.log('pValue', pValue)
    
    for (let i = 0; i <= t.length - pLength; i++) {
        const substring = t.slice(i, i + pLength);
        const substringValue = BigInt(substring);
        
        if (substringValue <= pValue) {
            count++;
        }
    }
    
    return count;
}

// 문자열 자르기

var str = '자바스크립트';
var result1 = str.substr(0, 2);
// 결과 : "자바"
// substr("시작 위치", "길이") 


var str = '자바스크립트';
var result1 = str.substring(0, 2);
// 결과 : "자바"
// substring("시작 위치", "종료 위치")

var str = '자바스크립트';
var result1 = str.slice(0, 2);
// 결과 : "자바"
// slice("시작 위치", "종료 위치")