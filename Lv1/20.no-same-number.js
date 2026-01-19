// 같은 숫자는 싫어
// 배열 arr가 주어집니다. 
// 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 
// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 
// 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 해결 및 고민과정
// 처음에는 for문과 map을 함께 사용하려고 했으나, map 함수를 사용하는 방법이 잘못되었음을 깨달음.

// for (let i = 0; i < arr.length; i++) {
//     arr.map((item[i]) => )
// }

function solution(arr) {
    
  const newArr = arr.filter((item, index) => {
    return item !== arr[index -1];
  });
    
  return newArr;
}


// map 자체가 배열을 순회하는 반복 함수, for문과 같이 쓸 일이 없음.
// 또한, map은 모든 요소를 변환할 뿐, 조건에 따라 제거하는 로직에는 적합하지 않음.
// 길이의 각 요소를 '같은 길이의 새로운 값'으로 변화할때 사용. -> 항상 새 배열을 반환.
// 값을 가공해야 할 경우 많이 쓰인다.
const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2);

const users = [
  { id: 1, name: 'Amy' },
  { id: 2, name: 'Bob' }
];
const names = users.map(user => user.name);
// ['Amy', 'Bob']


// 중복제거
arr.filter((item, index) => arr.indexOf(item) === index);  // 배열에서 처음 등장한 값만 남긴다
// [과정]
// filter가 배열을 앞에서부터 하나씩 순회
// item의 첫 등장 위치를 indexOf(item)으로 찾음
// 현재 위치 index와 같으면 → 처음 나온 값
// 다르면 → 이미 나왔던 값(중복) → 제거
// 결과: 전체 중복 제거

// 특정 값 제거(0 제거)
arr.filter(item => item !== 0);  // 값이 0인 요소만 빼고 전부 유지

// 0만 추출
arr.filter(item => item === 0);
// [과정]
// 배열을 하나씩 순회
// item === 0인지 검사
// 참(true)이면 유지
// 거짓(false)이면 제거
// 결과: 0으로만 이루어진 배열
