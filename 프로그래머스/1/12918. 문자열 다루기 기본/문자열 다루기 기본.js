function solution(s) {
    var answer = false
    if(s.length === 4 || s.length === 6) {
       return answer = [...s].every(item => !isNaN(item));   
    }
    return answer;
}