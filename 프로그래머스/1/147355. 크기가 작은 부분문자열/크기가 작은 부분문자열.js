function solution(t, p) {
    var answer = 0;
    var pLength = p.length
    for (i = 0 ; i<=t.length- pLength; i++ ) {
        if (parseInt(t.slice(i,i+pLength)) <= parseInt(p)){
            answer += 1
        } 
    }
    return answer
}