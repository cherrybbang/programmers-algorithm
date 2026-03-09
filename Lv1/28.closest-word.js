// 가장 가까운 글자

function solution(s) {
    const result = [];
    const lastIndex = {}; // 각 문자의 마지막 등장 위치를 저장
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (lastIndex[char] !== undefined) {
            // 이전에 같은 문자가 나온 적이 있다면, 현재 위치에서 이전 위치를 뺀 값
            result.push(i - lastIndex[char]);
        } else {
            // 처음 나온 문자라면 -1
            result.push(-1);
        }
        
        // 현재 문자의 위치를 업데이트
        lastIndex[char] = i;
    }
    
    return result;
}


const arr = ["a", "b", "c", "a"];
console.log(arr.lastIndexOf("a")); // 3 (마지막 'a'의 인덱스)