function solution(n, computers) {
    var answer = 0;
    const visited = Array(n).fill(false) 
    function bfs (node) {
        console.log(node, visited)
        visited[node] = true
        
        const queue = []
        queue.push(node)
        while(queue.length > 0) {
            const item = queue.shift()
            for (let i = 0 ; i < n ; i++) {
                if(computers[item][i] === 1 && !visited[i]) {
                    visited[i] = true
                    queue.push(i)
                }
            }
        }
    }
    
    for (let i = 0; i< n; i++) {
        if(!visited[i]) {
            bfs(i)
            answer++
        }
    }
    return answer;
}