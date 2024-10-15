function solution(n, m) {
    var answer = [];
    var big = n <= m ? n : m
    var asd = 0 
    for (i=big;i>=1; i--) {
        if(n%i === 0 && m %i ===0) {
            asd = i
            break
        }
    }
    answer.push(asd)

    for (i=big; i<=n*m; i++) {
        if(i % n ===0 && i% m === 0 ) {
            answer.push(i)
            break
        }
    }
    
    
    return answer;
}