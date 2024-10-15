function solution( d,budget) {
    var answer = 0;
    d.sort((a,b) => {return a-b})
    for (i= 0; i<d.length ; i++){
        if(d[i] > budget) {
            break
        }
        answer += 1
        budget -= d[i]
    }
    return answer;
}