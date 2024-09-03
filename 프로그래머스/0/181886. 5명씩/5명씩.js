function solution(names) {
    var answer = names.filter((a,b) => b % 5 == 0 );
    return answer;
}