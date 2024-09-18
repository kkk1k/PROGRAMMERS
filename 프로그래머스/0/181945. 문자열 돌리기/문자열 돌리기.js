const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    // 입력된 문자열의 최대 길이를 구함
    const maxLength = Math.max(...input.map(str => str.length));
    
    // 시계방향 90도 회전 결과 출력
    for (let i = 0; i < maxLength; i++) {
        let result = '';
        for (let j = input.length - 1; j >= 0; j--) {
            result += input[j][i] || ' '; // 문자가 없으면 공백 추가
        }
        console.log(result);
    }
});
