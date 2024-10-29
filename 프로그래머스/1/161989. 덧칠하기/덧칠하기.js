function solution(n, m, section) {
    var answer = 1;
    var lastIdx = section[0]
    if(section.length === 1) {
        return answer
    }
    for (let i = 1; i< section.length; i++) {
        if(section[i] - lastIdx < m) {
            continue
        } else {
            lastIdx = section[i]
            answer +=1
        }
        
    }
    return answer;
}