function solution(X, Y) {
    var answer = [];
    let xArr = [...X]
    let yArr = [...Y]
    let obj = {}
    yArr.forEach(item => {
        if(obj[item]===undefined ) {
            obj[item] = 1
        } else {
            obj[item] += 1
        }
    })
    
    xArr.forEach(item => {
        if(obj[item] !== undefined && obj[item] !== 0){
            answer.push(item)
            obj[item] -= 1
        }
    })
    if(!answer.length){
        return "-1"
    }
    if(Number(answer.join(""))===0){
        return "0"
    }
    return answer.sort((a,b)=>b-a).join("");
}