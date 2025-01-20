function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let start, lever, exit;
  for (let i = 0; i<n; i++) {
      for(let j=0; j<m; j++) {
          if(maps[i][j] === 'S') {
              start = [i,j]
          } else if(maps[i][j] === 'E') {
              exit = [i,j]
          } else if(maps[i][j] === 'L') {
              lever = [i,j]
          }
      }
  }

  function bfs(start, target) {
      let queue = []
      let [sx, sy] = start
      const visited = Array.from({ length: n }, () => Array(m).fill(false));

      queue.push([sx,sy,0])
      visited[sx][sy] = true
      
      while(queue.length) {
          const [x,y,count] = queue.shift()
          
          if(x===target[0] && y===target[1]) {
              return count
          }
          
          for(let i = 0; i<dx.length; i++) {
              const nx = x + dx[i]
              const ny = y + dy[i]
              
              if(nx <0 || ny<0 || nx >= n || ny >= m) continue
              if(visited[nx][ny] || maps[nx][ny] === "X" ) continue
              
              visited[nx][ny] = true
              queue.push([nx,ny,count +1 ])
          }
      }
      return -1
  }
    
    const startToLever = bfs(start, lever)
    if (startToLever === -1) return -1
    const leverToExit = bfs(lever,exit)
    if(leverToExit === -1) return -1
    return startToLever + leverToExit
}
