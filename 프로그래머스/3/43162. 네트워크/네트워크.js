function find (parents, x) {
    if(parents[x] === x) return x
    parents[x] = find(parents, parents[x])
    return parents[x]
}

function union (parents, x,y ) {
    const rootX = find(parents, x)
    const rootY = find(parents, y) 
    if( rootX !== rootY ) {
        parents[rootX] = rootY
    }
}

function solution(n, computers) {
    var answer = 0;
    const parents = Array.from({length : n}, (_,idx) => idx)

    
    for(let i = 0; i < computers.length; i++ ) {
        for(let j = 0; j< n ; j++) {
            if( computers[i][j] === 1) {
                union(parents,i,j)
            }
        }
    }
    
    for (let i = 0; i< parents.length ; i++) {
        parents[i] = find(parents, i)
    }
    console.log(parents)
    return [... new Set(parents)].length;
}