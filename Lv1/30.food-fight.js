// 푸드 파이트 대회

function solution(food) {
    let left = '';  // 왼쪽 부분
    
    for (let i = 1; i < food.length; i++) {  // 인덱스 1부터 시작 (0번은 물이므로 제외)
        if (food[i] >= 2) {  // 2개 이상일 때만
            const count = Math.floor(food[i] / 2);  // 한쪽에 놓을 개수
            left += i.toString().repeat(count);  // 인덱스 번호를 count만큼 반복
        }
    }
    
    // 완성: 왼쪽 + '0'(물) + 오른쪽(왼쪽의 역순)
    return left + '0' + left.split('').reverse().join('');
} 


left += i.toString().repeat(count);
// i 가 count 수 만큼 left에 추가된다.