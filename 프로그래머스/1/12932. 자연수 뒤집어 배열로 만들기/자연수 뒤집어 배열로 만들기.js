function solution(n) {
    var answer = String(n).split('').reverse().map(item=> Number(item))
    
    return answer;
}