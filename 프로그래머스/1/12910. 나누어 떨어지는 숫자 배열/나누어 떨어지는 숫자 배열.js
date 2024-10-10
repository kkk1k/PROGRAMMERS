function solution(arr, divisor) {
    var answer = arr.filter((item)=> item % divisor ===0 ).sort(function(a,b){
        return a-b
    });
    if (!answer.length) {
        return [-1]
    }
    return answer;
}