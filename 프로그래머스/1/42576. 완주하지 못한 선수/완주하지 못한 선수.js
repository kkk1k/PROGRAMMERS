function solution(participant, completion) {
    var answer = '';
    let hash = {}
    let hashComp = {}
    
    for (let player of completion) {
        if (hashComp[player] === undefined) {
            hashComp[player] = 1 
        } else {
            hashComp[player] += 1 
        }
    }
    
    for (let player of participant) {
        if (hashComp[player] === 0 || hashComp[player] === undefined) {
            return player
        } else {
            hashComp[player] -= 1
        }
    }
   return hash
}