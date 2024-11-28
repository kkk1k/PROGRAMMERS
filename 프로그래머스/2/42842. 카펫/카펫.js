function solution(brown, yellow) {
    var answer = [];
    let arr = []
    for(let i =1; i<= Math.sqrt(yellow); i++) {
        if(yellow % i === 0) {
            arr.push([i,yellow/i].sort((a,b)=> b-a))
        }
    }
    
    for(let i of arr) {
        if( (i[0] + 2) * (i[1] + 2) === brown + yellow) {
            
            return[i[0] + 2,i[1] + 2]
        }
    }
    
    
    return arr;
}