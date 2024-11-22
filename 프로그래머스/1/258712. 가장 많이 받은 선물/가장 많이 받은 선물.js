function solution(friends, gifts) {
    var answer = Array(friends.length).fill(0);
    let giftIdx = Array(friends.length).fill(0);
    let relation = Array.from({ length: friends.length }, () => Array(friends.length).fill(0));

    gifts.forEach(item => {
        let [give,get] = item.split(" ")
        let giveIdx = friends.indexOf(give)
        let getIdx = friends.indexOf(get)
        relation[giveIdx][getIdx] += 1
    })
    
    for(let i = 0; i<relation.length; i++){
        for(let j = 0; j<relation.length; j++) {
            giftIdx[i] += relation[i][j]
            giftIdx[i] -= relation[j][i]
        }
    }
    
    for(let i = 0; i<relation.length; i++){
        for(let j = 0; j<relation.length; j++) {
            if(i===j) {
                continue
            }
            if(relation[i][j] > relation[j][i]) {
                answer[i] += 1
            } else if(relation[i][j]=== relation[j][i]) {
                if(giftIdx[i] > giftIdx[j]) {
                    
                    answer[i] += 1
                } 
            }
        }
    }
    
    return Math.max(...answer);
}