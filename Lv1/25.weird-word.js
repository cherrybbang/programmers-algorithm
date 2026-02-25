function solution(s) {
    let newS = s.split(' ');
    let newArray = [];
    
    for (let i = 0; i < newS.length; i++) {
        let array = newS[i].split('');
        let result = '';
        
        for (let j = 0; j < array.length; j++) {
            if (j === 0 || j % 2 === 0) {
                result += array[j].toUpperCase();
            } else {
                result += array[j].toLowerCase();
            }
        }
        newArray.push(result);
    }
    
    return newArray.join(' ');
}


// 클린 코드
function solution(s) {
    return s.split(' ').map(word => 
        word.split('').map((char, i) => 
            i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join('')
    ).join(' ');
}