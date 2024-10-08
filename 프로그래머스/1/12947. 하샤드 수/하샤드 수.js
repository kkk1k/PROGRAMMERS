function solution(x) {

    var answer = true;
    var abc = String(x).split('').reduce((a,b)=> a+Number(b),0 )
    if(x % abc) {
        return false
    }
    return answer;
}