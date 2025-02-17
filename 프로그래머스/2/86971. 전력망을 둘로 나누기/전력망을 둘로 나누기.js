function solution(n, wires) {
    var answer = [];
    const graph = Array.from({length : n+1}, ()=> [])
    for (let i of wires) {
        const [u,v] = i
        graph[u].push(v)
        graph[v].push(u)
    }
    
    function dfs (node, parent) {
        // 연결된 개수를 찾는 것
        let cnt =1 
        for(const i of graph[node]) {
            if(i !== parent) {
                cnt += dfs(i,node)
            }
        }
        return cnt
    }
    
    for ([a,b] of  wires) {
        graph[a].splice(graph[a].indexOf(b), 1)
        graph[b].splice(graph[b].indexOf(a), 1)
        
        const section1 = dfs(a,b)
        const section2 = n- section1
        answer.push(Math.abs(section1- section2))
        
        graph[a].push(b)
        graph[b].push(a)
        
        
    }
    answer.sort((a,b)=> a-b)
    return answer[0];
}