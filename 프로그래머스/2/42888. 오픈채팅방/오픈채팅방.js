function solution(record) {
    var answer = [];
    let obj= {}
    for (let i of record) {
        let [order, id, name] = i.split(" ")
        if(order === "Enter" || order === "Change") {
            obj[id] = name
        }
        
    }

    for (let i of record) {
        let [order, id, name] = i.split(" ")
        if(order === "Enter") {
            answer.push(`${obj[id]}님이 들어왔습니다.`)
        } else if( order === "Leave") {
            answer.push(`${obj[id]}님이 나갔습니다.`)
        }
        
    }
    
    return  answer;
}