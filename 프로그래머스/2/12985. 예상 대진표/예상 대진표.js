function solution(n,a,b)
{
    let answer = 1;
    let stageA = Math.ceil(a/2)
    let stageB = Math.ceil(b/2)
    while(true) {
        if(stageA === stageB) {
            break
        }
        answer += 1
        stageA = Math.ceil(stageA/2)
        stageB = Math.ceil(stageB/2)
        
    }
    
    
    return answer;
}