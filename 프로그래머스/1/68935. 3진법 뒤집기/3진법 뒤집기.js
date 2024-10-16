function solution(n) {
    var answer = 0;
    var nArr = [];
    if (n === 1) {
        return 1
    }
    while(n >= 3) {
        nArr.push(n%3)
        n = parseInt(n/3)
        if (0< n && n < 3) {
            nArr.push(n)
        } 
    }
    
    for(i = 0 ; i < nArr.length; i++) {
        answer += 3 ** (nArr.length - i - 1) * nArr[i]
    }
    
    return answer;
}