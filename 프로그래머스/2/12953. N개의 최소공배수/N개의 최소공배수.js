function solution(arr2) {
    var answer = 1;
    const lcd = (a,b) => {
        let i =1
        while(true) {
            if(i % a === 0 && i % b ===0) {
                return i
            }
            i++
        }
    }
    
    let first = 1
    
    for (let i of arr2) {
        answer = lcd(first,i)
        first = answer
    }
    
    
    return answer;
}