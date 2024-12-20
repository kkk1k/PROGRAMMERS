function solution(n, left, right) {
    var answer = [];
    for (let i = left; i<=right; i++) {
        let mock = Math.floor(i/n)
        let namage = i%n
        let k = mock > namage ? mock: namage
        answer.push(k+1)
    
    }
    return answer;
}