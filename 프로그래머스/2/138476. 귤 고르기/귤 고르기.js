function solution(k, tangerine) {
    var answer = 0;
    let del = k
    let obj = {}
    tangerine.forEach(item => {
        if(obj[item] === undefined) {
            obj[item] = 1
        } else {
            obj[item] += 1
        }
    })
    
    const entries = Object.entries(obj);

    entries.sort(([, valueA], [, valueB]) => valueB - valueA);
    let i = 0
    while (del > 0) {
        del -= entries[i][1]
        answer += 1
        i++
    }
    
    return answer;
}