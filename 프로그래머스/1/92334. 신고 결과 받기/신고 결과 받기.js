function solution(id_list, report, k) {
    var answer = Array(id_list.length).fill(0);
    let newReport = [...new Set(report)]
    let banId = {}
    let punish = {} 
    newReport.forEach((item)=>{
        let [a,b] = item.split(" ")
        if(banId[b] === undefined) {
            banId[b] = 1   
        } else {
            banId[b] += 1
        }
        if (punish[a] === undefined) {
            punish[a] = []; 
        }
        punish[a].push(b); 
    })
    
    Object.keys(banId).forEach(item => {
        if(banId[item] < k) {
            delete banId[item]
        }
    })
    
    id_list.forEach((item, idx)=> {
       Object.keys(banId).forEach(ban => {
        if(punish[item] && punish[item].includes(ban)) {
            answer[idx] += 1
        }
    })
    })
    
    return answer;
}