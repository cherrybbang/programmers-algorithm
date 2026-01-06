// 핸드폰 번호 가리기

function solution(phone_number) {
    let newArr = Array.from(String(phone_number));
    newArr.fill('*', 0, newArr.length - 4);
    return newArr.join('');
    
}

// fill(value, start, end) 메서드는 배열의 시작 인덱스부터 끝 인덱스까지 주어진 값으로 채운다.