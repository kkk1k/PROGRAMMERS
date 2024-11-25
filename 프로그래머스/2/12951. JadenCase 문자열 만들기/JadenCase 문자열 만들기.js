function solution(s) {
    var answer = s.split("");
    let arr = []
    arr.push(answer[0].toUpperCase())
    for (let i = 1; i< answer.length; i++) {
        if(answer[i-1] === " "){
            arr.push(answer[i].toUpperCase())
        } else {
            arr.push(answer[i].toLowerCase())
        }
    }
    return arr.join("");
}