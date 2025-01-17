function solution(genres, plays) {
    var answer = [];
    let objG = {}
    let objP = {}
    
    for (let i = 0; i< genres.length ; i++) {
        let genre = genres[i]
        let play = plays[i]
        
        if(objG[genre] === undefined) {
            objG[genre] = []
            objP[genre] = 0
        }
        
        objG[genre].push([i,play])
        objP[genre] += play
    }
    
    let sortG = Object.keys(objP).sort((a,b)=> objP[b] - objP[a])
    
    for (let i of sortG) {
        objG[i].sort((a,b) => {
            if(a[1] > b[1]) {
                return -1
            } else if ( a[1] < b[1]) {
                return 1
            } else {
                return a[0] - b[0]
            }
        })
        answer.push(objG[i][0][0])
        if (objG[i].length > 1) { // 두 번째 곡이 있을 경우에만 추가
            answer.push(objG[i][1][0]);
        }
    }
    
    return answer
    
}