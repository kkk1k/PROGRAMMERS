function solution(n, lost, reserve) {
    lost.sort((a,b)=> a-b)
    reserve.sort((a,b) => a-b)
    let actLost = lost.filter(item => !reserve.includes(item))
    let actRev = reserve.filter(item => !lost.includes(item))
    var answer = n-actLost.length;
    var newRe = new Set(actRev)
    for(let num of actLost) {
        if(newRe.has(num-1)) {
            newRe.delete(num-1)
            answer++
        } else if(newRe.has(num+1)) {
            newRe.delete(num+1)
            answer++
        } 
    }
    return answer;
}

console.log(solution(7, [2, 3, 4], [1, 2, 3, 6]));