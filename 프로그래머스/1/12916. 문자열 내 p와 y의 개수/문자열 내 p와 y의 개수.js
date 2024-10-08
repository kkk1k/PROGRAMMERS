function solution(s){
    var answer = true;
    var pCnt = 0;
    var yCnt = 0;
    var s = s.toLowerCase()
    for (i=0; i<s.length; i++) {
        if(s[i] === 'p') {
            pCnt += 1
        } else if(s[i] ==='y') {
            yCnt += 1
        }
    } 
    if(pCnt !== yCnt) {
        return false
    }
    return answer;
}