function solution(food) {
    var answer = '';
    for (let i = 1 ; i<food.length; i++) {
        // for (j = 0 ; j<Math.floor(food[i]/2); j++) {
        //     answer += `${i}` 
        // }
        answer += `${i}`.repeat(Math.floor(food[i]/2))
        
    }
    return answer + "0" + answer.split('').reverse().join('');
}