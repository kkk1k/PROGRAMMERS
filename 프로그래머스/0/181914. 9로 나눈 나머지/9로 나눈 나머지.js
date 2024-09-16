function solution(number) {
    var answer = [...number].map(item => Number(item)).reduce((a,b) => a+b, 0);
    return answer % 9;
}