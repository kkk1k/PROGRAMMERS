function solution(n, words) {
    var answer = [];
    let obj = {}
    let num = 0
    let ord = 0
    let lastWord = words[0][0]
    for(let i = 0; i< words.length; i++) {
        let word = words[i]
        if(obj[word] === 1) {
            num = Math.floor(i / n) +1 
            ord = i % n + 1
            console.log(i)
            break
        } else {
            if(lastWord !== word[0]) {
                num = Math.floor(i / n) +1
                ord = i % n + 1
                console.log(i)
                break
            } else {
                obj[word] = 1
                lastWord = word[word.length -1 ]
            }
        }
        
    } 
    
    answer.push(ord)
    answer.push(num)
    return answer;
}