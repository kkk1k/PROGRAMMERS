function solution(maps) {
    var answer = 0;
    const n = maps.length
    const m = maps[0].length 
    const dx = [1,-1, 0, 0]
    const dy = [0,0,1,-1]
    const visited = Array.from({length: n}, () => Array(m).fill(false))
    function bfs() {
        let loc = [0,0,1]
        let queue = []
        visited[0][0] = true
        queue.push(loc)
        while(queue.length > 0) {
            let [x,y,d] =queue.shift()
            if(x === n-1 && y === m-1) {
                return d
            }
            for (let i = 0; i<dx.length; i++) {
                let nextX = x + dx[i]
                let nextY = y + dy[i]
                if(nextX >= 0 && nextX < n && nextY >= 0 && nextY < m && 
                   !visited[nextX][nextY] && 
                   maps[nextX][nextY] !== 0) {
                    visited[nextX][nextY] = true
                    queue.push([nextX,nextY,d +1])
                }
            }
        }
        return -1
    }
    return bfs()

}


