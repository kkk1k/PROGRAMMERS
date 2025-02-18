function find(x,parents) {
    if (parents[x] === x) return x
    
    parents[x] = find(parents[x], parents)
    return parents[x]
}

function union(x,y, parents) {
    const rootX = find(x, parents)
    const rootY = find(y, parents)
    if(rootX !== rootY) {
        parents[rootY] = rootX
    }
}

function solution(n, wires) {
    var answer = [];
    
    function check (arr) {

        const obj = {}
        for (let i = 1; i<arr.length; i++) {
            arr[i] = find(i,arr)
            obj[arr[i]] = (obj[arr[i]] || 0) + 1
        }
        
        let sizes = Object.values(obj);
        if (sizes.length === 2) {
            var diff = Math.abs(sizes[0] - sizes[1]);
        }
        answer.push(diff)
    }
    
    for(let i = 0; i < wires.length; i++) {
        const parents = Array.from({length : n +1}, (_,idx) => idx)
        
        for(let j = 0; j<wires.length ; j++) {
            if(i === j) continue
            let [a,b] = wires[j]
            union(a,b,parents)
        }
        check(parents)
    }
    return answer.sort((a,b)=> a-b)[0];
}