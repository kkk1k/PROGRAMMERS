function solution(a, b) {
    var answer = 0;
    if (a>b) {
        var c = a
        var a = b
        var b = c
    }
    for (i=a;i<=b;i++){
        answer += i
    }
    return answer;
}