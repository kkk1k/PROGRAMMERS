function solution(lottos, win_nums) {
    var answer = [0,0];
    for (let lotto of lottos) {
        if(!lotto){
            answer[0] += 1
        }
        if(win_nums.includes(lotto)){
            answer[0] += 1
            answer[1] += 1
        }
        
    }
    
    return answer.map((item)=>{
        if(item === 6) {
            return 1
        } else if (item === 5) {
            return 2
        } else if (item === 4) {
            return 3   
        } else if (item === 3) {
            return 4
        } else if (item === 2) {
            return 5
        } else {
            return 6
        }
    });
}