function solution(k, score) {
    var answer = []
    var result = []
    for(i = 0 ; i<score.length; i++) {
        if(i<=k-1){
            answer.push(score[i])
        } 
        if(i > k-1 && answer[answer.length-1] <= score[i]) {
            answer[answer.length-1] = score[i]
        }
        answer.sort((a,b)=> b-a)
        result.push(answer[answer.length-1])
    }
    return result;
}