function find(parents,x) {
    if(parents[x] === x) return x
   
    parents[x] = find(parents, parents[x])
    return parents[x]
}

function solution(n, costs) {
    var answer = 0;
    const parents = Array.from({length:n}, (_,idx)=> idx)
    costs.sort((a,b) => a[2] - b[2])
    
    const union = (x,y,cost) => {
        const root1 = find(parents, x)
        const root2 = find(parents, y)
        
        if(root1 !== root2) {
            parents[root2] = root1
            answer += cost
        }
    }
    
    for(let i of costs) {
        let [x,y,cost] = i
        union(x,y,cost)

    }
    return answer;
}