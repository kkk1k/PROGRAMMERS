function solution(num_list, n) {
    var answer = num_list.slice(n,num_list.length);
    for (i = 0; i<n ; i++) {
        answer.push(num_list[i])
    }
    return answer;
}