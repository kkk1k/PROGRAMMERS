function solution(n) {
    var answer = '';
    for (i=0; i<n; i++) {
        if(i%2){
            answer += '박'
        } else {
            answer += '수'
        }
    }
    return answer;
}