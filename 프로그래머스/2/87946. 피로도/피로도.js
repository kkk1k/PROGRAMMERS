function solution(k, dungeons) {
    var answer = 0;
    let visited = Array(dungeons.length).fill(false)
    function dfs(hp,L) {
        for(let i = 0; i<dungeons.length; i++){
            if(hp>=dungeons[i][0] && !visited[i]) {
                visited[i] = true
                dfs(hp-dungeons[i][1],L+1)
                visited[i] = false
            }
        }
        
        answer = Math.max(answer,L)
    }
    
    dfs(k,0)
    
    return answer;
}