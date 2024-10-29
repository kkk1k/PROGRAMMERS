function solution(dartResult) {
    var answer = 0;
    var pointArr = []
    var arr = dartResult.match(/\d+[A-Z]\D?/g)
    for(let i = 0 ; i< arr.length; i++) {
        let point = 0
        let word = arr[i].match(/\d+|[A-Z]|[#*]/g)
        let shot = Number(word[0])
        if (word[1] === "S") point = shot
        if (word[1] === "D") point = shot ** 2
        if (word[1] === "T") point = shot ** 3
        if (word[2]==="*"){
            point = point * 2
            if(i > 0) {
                pointArr[i-1] *= 2
            }     
        } 
        if (word[2]==="#"){
            point = point * (-1)
        } 
        pointArr.push(point)
        
    }
    return pointArr.reduce((a,b)=> a+b,0);
}