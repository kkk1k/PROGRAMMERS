function solution(clothes) {
    let obj = {};
    let answer = 1
    for (let i of clothes) {
        let kind = obj[i[1]]; 
        
        if (kind === undefined) {
            obj[i[1]] = [i[0]]; 
        } else {
            obj[i[1]].push(i[0]); 
        }
    }
    
    for(let i of Object.keys(obj)){
        
        answer *= (obj[i].length + 1) 
    }
    
    return answer - 1
}
