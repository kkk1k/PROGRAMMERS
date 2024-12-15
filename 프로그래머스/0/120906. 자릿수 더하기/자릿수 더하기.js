function solution(n) {
    var answer = String(n).split("").map(Number).reduce((a,b)=> a+b,0);
    return answer;
}