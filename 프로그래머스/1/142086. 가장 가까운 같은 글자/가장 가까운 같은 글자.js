function solution(s) {
    let result = []
    let hash = {}
    
    for(i = 0; i<s.length ; i++) {
        let char = s[i]
        if(hash[char] !== undefined) {
            result.push(i-hash[char])
            
        } else {
            result.push(-1)
            
        }
        hash[char] = i
    }
    return result
}