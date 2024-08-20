function solution(num_list, n) {
    var answer = num_list.filter((a,idx) => idx+1 <= n);
    
    return answer;
}