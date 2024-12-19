function solution(my_string, n) {
    var answer = [];
    for(let i of my_string) {
        let j = 0
        while(j < n) {
            j++
            answer.push(i)
        }
    }
    return answer.join("");
}