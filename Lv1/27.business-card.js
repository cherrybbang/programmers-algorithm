// 최소직사각형

function solution(sizes) {
    
    let maxWidth = 0;
    let maxHeight = 0;
    
    for (let [w, h] of sizes) {
        
        let width = Math.max(w, h);  // w, h 중 max 함수 이용하여 더 큰 값 구하기, 큰값 -> 가로
        let height = Math.min(w, h); // w, h 중 min 함수 이용하여 더 작은 값 구하기, 작은값 -> 세로
        
        maxWidth = Math.max(maxWidth, width);
        maxHeight = Math.max(maxHeight, height);
    }
    
    return maxWidth * maxHeight;
}


// 풀이 설명
// 1. [가로, 세로] 이지만 가로와 세로의 위치는 바뀔 수 있기 때문에, 각 명함의 가로와 세로 중 큰 값을 가로로, 작은 값을 세로로 고정하여 계산.
// 2. 모든 명함을 순회하면서 최대 가로와 최대 세로를 구한다.