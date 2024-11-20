function solution(maps) {
    
    let pos = [0,0]
    let visited = Array.from({ length: maps.length }, () =>
        Array(maps[0].length).fill(false)
    );
    
    function bfs(x, y) {
        let queue  = [];
        visited[x][y] = true;
        queue.push([x, y, 1]);
        while (queue.length !== 0) {
            let [curX, curY,dist] = queue.shift();
            if(curX === maps.length-1 && curY===maps[0].length-1) {
                return dist
            }
            
            //상하좌우
            let dx = [-1, 1, 0, 0] 
            let dy = [0, 0, -1, 1]
            for(let i = 0 ; i< dx.length; i++) {
                let a = curX + dx[i]
                let b = curY + dy[i]
                if(a >=  0 && a < maps.length  && b >=0 && b < maps[0].length && maps[a][b] === 1 && !visited[a][b]) {
                    visited[a][b] = true
                    queue.push([a,b,dist+1])
                    
                }
                
            }
            
        }
        return -1
    }
    
    
    return bfs(0,0)
        
    
}