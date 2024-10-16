function solution(s) {
    var answer = [...s];
    var result = []
    for (i= 0; i<s.length; i++) {
        if (i===0) {
            result.push(-1)
        } else {
            for( j = i-1; j>=0; j-- ) {
                if(answer[i] === answer[j] ) {
                    result.push(i-j)
                    break
                } 
                if (j === 0) {
                    result.push(-1)
                }
            }
        }
    }
    return result;
}