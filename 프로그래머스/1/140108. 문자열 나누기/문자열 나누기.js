function solution(s) {
    
    var answer = 0;
    var firstWord = s[0]
    var firstNum = 1
    var anotherNum = 0
    var arr = []
    if (s.length === 1) {
        return 1
    }
    for (let i = 1; i< s.length ; i++) {
        if(firstWord === "") {
            if(i === s.length -1 ) {
                answer += 1
                continue
            }
            firstWord = s[i]
            continue
        }
        if(s[i] === firstWord) {
            firstNum += 1
        } else {
            anotherNum += 1
        }
        
        
        if(firstNum === anotherNum) {
            answer += 1
            firstNum = 1
            anotherNum = 0
            firstWord = ""
            console.log(s[i])
        } else {
             if(i === s.length -1 ) {
                answer += 1
                continue
            }
        }
        
    }
    return answer;
}