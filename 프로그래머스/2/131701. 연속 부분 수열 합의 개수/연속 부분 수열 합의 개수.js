function solution(elements) {
    var answer = new Set;
    let circle = elements.concat(elements)
    
    for (let i = 1 ; i<=elements.length; i++) {
        let sum = 0
        
        for(let k = 0; k<i; k++) {
            sum += circle[k]    
            
        }
        answer.add(sum)
        for(let j = i; j<elements.length + i; j++) {
            sum = sum - circle[j-i] + circle[j] 
            answer.add(sum)
        }
        
    }
    return answer.size
}