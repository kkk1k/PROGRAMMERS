function solution(cacheSize, cities) {
    var answer = 0;
    let queue = []
    if(cacheSize === 0 ) {
        return cities.length * 5
    }
    for(let k of cities) {
        let i = k.toLowerCase()
        if(queue.includes(i)){
            let idx = queue.indexOf(i)
            queue = queue.slice(0,idx).concat(queue.slice(idx+1))
            queue.push(i)
            answer += 1
        } else {
            if(queue.length >= cacheSize) {
                queue.shift()
            } 
            queue.push(i)
            answer += 5
        }
    }
    return answer;
}