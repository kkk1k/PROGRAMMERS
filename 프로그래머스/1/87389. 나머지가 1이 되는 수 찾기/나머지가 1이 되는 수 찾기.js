function solution(n) {
    var answer = 0;
    for ( i = 0; i<n; i++) {
        if(n%i===1) {
            answer =i
            return answer;
        }
    }
    return n-1
}