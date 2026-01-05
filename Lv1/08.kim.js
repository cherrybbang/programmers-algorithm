// 서울에서 김서방 찾기

function solution(seoul) {
   for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === 'Kim') {
            return `김서방은 ${i}에 있다`
        }
    }
}


// 다른 풀이

// indexOf는 배열에서 특정 값이 있는 위치를 찾아주는 함수.
function solution(seoul) {
  const idx = seoul.indexOf('Kim');
  return `김서방은 ${idx}에 있다`;
}

// 배열에서 조건을 만족하는 첫번째 요소의 인덱스를 찾아주는 함수.
// 배열을 하나씩 돌면서, 조건에 맞는 요소를 찾으면 해당 요소의 인덱스를 반환.
function solution(seoul) {
  const idx = seoul.findIndex(name => name === 'Kim');
  return `김서방은 ${idx}에 있다`;
}

// 단순 값 찾기 → indexOf
// 조건 걸어서 찾기 → findIndex