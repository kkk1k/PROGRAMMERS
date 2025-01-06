function solution(s) {
    var answer = [];
    let arr = s.replaceAll("{","[").replaceAll("}",']')
    arr = JSON.parse(arr)
    arr.sort((a,b) => a.length - b.length)
    arr.forEach(item => {
        for(let i of item) {
            if(!answer.includes(i)){
                answer.push(i)
            }
        }
    })
    return answer.map(Number);
}