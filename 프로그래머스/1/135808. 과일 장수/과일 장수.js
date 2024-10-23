function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b) => b-a)
    for (i= m-1 ; i<score.length ;i += m) {
        
        answer+= m*score[i]
    }
    return answer;
}