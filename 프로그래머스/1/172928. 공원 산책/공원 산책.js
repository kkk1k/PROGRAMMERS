function solution(park, routes) {
    
    var answer = [];
    let yLength = park.length
    let xLength = park[0].length
    park.forEach((item,idx)=> {
        if(item.includes("S")) {
            answer.push(idx)
            answer.push(item.indexOf("S"))
        }
    })
    routes.forEach(item => {
        let direction = item.split(" ")[0]
        let walk = Number(item.split(" ")[1]) 
        if(direction === "E") {
            let isBlocked = false; 
            if(answer[1] + walk < xLength) {
                for(let i = answer[1]; i<=answer[1]+walk; i++) {
                    if(park[answer[0]][i] === "X") {
                        isBlocked = true
                        break
                    } 
                }
                if(!isBlocked){
                    answer[1] += walk
                }
            }
        } else if (direction === "W") {
            let isBlocked = false; 
            if(answer[1] - walk >= 0) {
                for(let i = answer[1]; i>=answer[1]-walk; i--) {
                    if(park[answer[0]][i] === "X") {
                        isBlocked = true
                        break
                    } 
                }
                if(!isBlocked){
                    answer[1] -= walk
                }
            }
        } else if (direction === "N") {
            let isBlocked = false; 
            if(answer[0] - walk >= 0) {
                for(let i = answer[0]; i>=answer[0]-walk; i--) {
                    if(park[i][answer[1]] === "X") {
                        isBlocked = true
                        break
                    } 
                }
                if(!isBlocked){
                    answer[0] -= walk
                }
            }
        } else {
            let isBlocked = false; 
            if(answer[0] + walk < yLength) {
                for(let i = answer[0]; i<=answer[0]+walk; i++) {
                    if(park[i][answer[1]] === "X") {
                        isBlocked = true
                        break
                    } 
                }
                if(!isBlocked){
                    answer[0] += walk
                }
            }
        }
        console.log(answer)
    }
                   
    )
    return answer;
}