function solution(k, dungeons) {
    var answer = 0;
    const num = dungeons.length
    const visited = Array(num).fill(false)
    const dfs = (potion, count) => {
        
        for (let i = 0; i < num ; i++) {
            if(!visited[i] && potion >= dungeons[i][0]) {
                visited[i] = true
                dfs(potion - dungeons[i][1], count + 1)
                visited[i] = false
            }
        }
        answer = Math.max(count,answer)
    }
    
    dfs(k,0)
    
    return answer;
}