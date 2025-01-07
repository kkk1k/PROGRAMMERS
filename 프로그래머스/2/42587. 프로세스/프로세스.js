function solution(priorities, location) {
    var answer = 0;
    const arr = priorities.map((process,index) => {
        return {process, index};
    })
    while(arr.length !== 0) {

        let current = arr.shift()
        if(arr.some(item => item.process > current.process )) {
            arr.push(current)
        } else {
            answer ++
            
            if(current.index === location) {
                return answer
            }
            
        }
    }
    return arr;
}