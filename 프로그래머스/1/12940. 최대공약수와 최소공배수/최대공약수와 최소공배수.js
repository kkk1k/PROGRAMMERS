function solution(n, m) {
    var answer = [];
    var smallArr = []
    if (n > m) {
        var small = n
        var big = m
    } else {
        var small = m
        var big = n 
    }
    
    for (i = 1; i <= small; i++){
        if(small % i === 0) {
            smallArr.push(i)
        }
    }
    
    for(i= smallArr.length; i>=0; i--) {
        if(big % smallArr[i] === 0 ) {
            answer.push(smallArr[i])
            break
        }
    }
    
     for (i = big ; i<=m*n; i += smallArr[0] ) {
         if (i % m ===0 && i % n === 0) {
             answer.push(i)
             break
         }
     }
    
    return answer;
}