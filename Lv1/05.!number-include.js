// 없는 숫자 더하기
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 해결 및 고민과정
// 1. 0부터 9까지의 숫자 중이라고 했으니 0부터 9까지 반복문을 돌리기로 했다.
// 2. numbers 배열에 해당 숫자가 포함되어 있지 않은지 확인하기 위해 includes() 메서드를 사용했고,
// 3. 포함되어 있지 않다면 sum 변수에 그 숫자를 누적시켰다.

function solution(numbers) {
    let sum = 0;

    for (let i = 0; i <= 9; i++) {
        if (!numbers.includes(i)) {
            sum += i;
        }
    }
    return sum;
}
