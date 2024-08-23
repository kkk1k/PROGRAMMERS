function solution(slice, n) {
    var answer = n /slice ;
    if (!Number.isInteger(answer) ) {
        answer = parseInt(answer,10 ) +1 
    }
    return answer;
}