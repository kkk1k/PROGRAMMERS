function solution(num_list) {
    var answer = 0;
    if (num_list.length < 11) {
        answer =1
        for(i = 0 ;i < num_list.length; i++) {
            answer = num_list[i] * answer 
        }
    } else {
        answer =0
        for(i = 0; i < num_list.length; i++) {
            answer = num_list[i] + answer 
        }
    }
    return answer;
}