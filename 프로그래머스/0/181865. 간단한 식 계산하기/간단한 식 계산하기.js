function solution(binomial) {
    var answer = binomial.split(' ');
    if (answer[1] == '+') {
        answer = Number(answer[0]) + Number(answer[2])
    } else if (answer[1] == '-') {
        answer = Number(answer[0]) - Number(answer[2])
    } else {
         answer = Number(answer[0]) * Number(answer[2])
    }
    
    return answer;
}