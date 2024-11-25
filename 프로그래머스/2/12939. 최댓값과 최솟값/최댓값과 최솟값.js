function solution(s) {
    var answer = s.split(" ").map(Number);
    answer.sort((a,b)=> a-b)
    return String(answer[0])+" "+String(answer[answer.length-1]);
}