function solution(begin, target, words) {
    var answer = 0;
    const visited = new Set()
    if (!words.includes(target)) {
    return 0;
    }
    const isDiff = (w1, w2) => {
        let diff = 0
        for (let i = 0 ; i<w1.length; i++) {
            if(w1[i] !== w2[i]) {
                diff +=1
            }
            if(diff > 1) {
                return false
            }
        }
        return diff === 1
    }
    
    const queue = [[begin, 0]]
    visited.add(begin)
    while(queue.length > 0) {
        const [word, d] = queue.shift()

        if(word === target) {
            return d
        }
        for (let nextWord of words) {
            if(isDiff(word,nextWord) && !visited.has(nextWord)) {
                visited.add(nextWord)
                queue.push([nextWord,d+1])
            }
        }
     }
    
    return 0;
}