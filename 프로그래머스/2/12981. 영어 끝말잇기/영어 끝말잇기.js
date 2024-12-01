function solution(n, words) {
    var answer = [];

    let prev = words[0]
    let arr = []
    let num = 0
    for(let i = 0; i<words.length; i++) {
        if(i % n === 0 ){
            num += 1
        } 
        if(i === 0 ){
            arr.push(words[i])
            continue
        } else if (words[i][0] === prev[prev.length - 1] && !arr.includes(words[i]) ) {
            arr.push(words[i])
            prev = words[i]
        } else if ( words[i][0] !== prev[prev.length - 1] || arr.includes(words[i]) ) {
            
            answer.push(i % n + 1)
            answer.push(num)
            break
        }
    }
    if(answer.length === 0 ) {
        return [0,0]
    } 
    return answer;
}