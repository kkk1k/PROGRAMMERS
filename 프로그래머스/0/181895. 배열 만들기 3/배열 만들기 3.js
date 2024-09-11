function solution(arr, intervals) {
    var answer = arr.filter((item,idx) => intervals[0][0]<=idx && idx <= intervals[0][1]   );
    var answer1 = arr.filter((item,idx) => intervals[1][0]<=idx && idx <= intervals[1][1]   );
    
    return answer.concat(answer1);
}