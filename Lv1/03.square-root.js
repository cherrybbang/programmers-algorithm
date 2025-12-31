// 정수 제곱근 구하기
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 해결 및 고민과정
// 1. 우선, 매개변수 n의 제곱근이 무엇인지 알아야겠다고 생각했다.
// 2. 그리고 그 제곱근이 정수인지 아닌지 확인해야 했고 이를 위해 Number.isInteger() 메서드를 사용했다.
// 3. 제곱근이 정수라면, 그 제곱근에 1을 더한 후 제곱하여 반환하도록 했고, 정수가 아니라면 -1을 반환하도록 조건문을 작성했다.

function solution(n) {
    const root = Math.sqrt(n);
    const int = Number.isInteger(root);
    
    if (int === true) {
        return Math.pow(root+1, 2);
    }
    if (int === false) {
        return -1;
    }
}


// Math.pow(base, exponent)
// base : 밑   exponent : 지수
// 예시) Math.pow(3, 3); ---> 27

// Math.sqrt()
// 제곱근을 구하는 함수. 숫자의 제곱근을 반환한다.
// 예시) Math.sqrt(9); ---> 3

// 제일 작은 양의 제곱근은 1이다. 0은 양의 정수가 아니기 때문이다.