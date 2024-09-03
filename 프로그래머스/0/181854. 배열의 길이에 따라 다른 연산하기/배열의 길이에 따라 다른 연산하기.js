function solution(arr, n) {
    var answer = []
    if(arr.length % 2 == 1) {
        answer = arr.map((item,idx)=>idx%2 == 0 ? item+n : item)
    } else {
 answer = arr.map((item,idx)=>idx%2 == 1 ? item+n : item)
    }
        
    return answer;
}