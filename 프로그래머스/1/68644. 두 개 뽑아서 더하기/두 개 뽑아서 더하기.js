function solution(numbers) {
    var answer = [];
    for(i = 0; i<numbers.length -1 ; i++){
        for(j = i +1; j<numbers.length; j++) {
            if (!answer.includes(numbers[i] + numbers[j])) {
                answer.push(numbers[i] + numbers[j])
            }
        }
    }
    return answer.sort((a,b)=> a-b);
}