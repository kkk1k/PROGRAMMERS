function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  
  // 시작점(S), 레버(L), 출구(E)의 위치를 찾기
  let start, lever, exit;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === 'S') start = [i, j];
      else if (maps[i][j] === 'L') lever = [i, j];
      else if (maps[i][j] === 'E') exit = [i, j];
    }
  }
  
  // BFS 함수: 시작좌표에서 목표 좌표까지의 최소 이동 횟수를 반환
  // 만약 도달할 수 없다면 -1을 반환합니다.
  function bfs(startPos, targetPos) {
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [];
    const [sx, sy] = startPos;
    
    // 좌표와 현재까지 걸린 이동 횟수를 함께 저장: [x, y, count]
    queue.push([sx, sy, 0]);
    visited[sx][sy] = true;
    
    // 상, 하, 좌, 우 이동 방향 배열
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    while (queue.length) {
      const [x, y, count] = queue.shift();
      
      // 목표 지점에 도달한 경우 즉시 이동 횟수를 반환
      if (x === targetPos[0] && y === targetPos[1]) {
        return count;
      }
      
      // 네 방향으로 이동 시도
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        
        // 미로 범위를 벗어나면 continue
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        // 벽('X')이거나 이미 방문한 칸이면 continue
        if (visited[nx][ny] || maps[nx][ny] === 'X') continue;
        
        visited[nx][ny] = true;
        queue.push([nx, ny, count + 1]);
      }
    }
    // 목표에 도달할 수 없으면 -1 반환
    return -1;
  }
  
  // 먼저 시작점에서 레버까지의 최소 이동 시간을 구함
  const stepsToLever = bfs(start, lever);
  if (stepsToLever === -1) return -1;
  
  // 레버를 당긴 후, 레버 위치에서 출구까지의 최소 이동 시간을 구함
  const stepsToExit = bfs(lever, exit);
  if (stepsToExit === -1) return -1;
  
  // 전체 최소 이동 시간은 두 구간의 합
  return stepsToLever + stepsToExit;
}
