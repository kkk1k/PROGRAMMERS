function solution(n) {

    var answer = -1;
    
    for (i=1;i<n+1;i++){
        if(n / i === i) {
            return (i+1) ** 2
        }
    
    }
    return answer;
}