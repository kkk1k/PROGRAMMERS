const input = require("fs")
  .readFileSync( "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const test = Number(input[0]);
let index = 1;
let result = [];

for (let t = 0; t < test; t++) {
  const [n, m, num] = input[index].split(" ").map(Number);
  const graph = Array.from({ length: n }, () => Array(m).fill(0));
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  // 배추 위치 설정
  for (let j = index + 1; j <= index + num; j++) {
    const [x, y] = input[j].split(" ").map(Number);
    graph[x][y] = 1;
  }

  index += num + 1; // 다음 테스트 케이스로 이동

  // 연결 요소 개수 세기
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1 && !visited[i][j]) {
        dfs(i, j, graph, visited, n, m);
        count++; // 새로운 군집 발견
      }
    }
  }

  result.push(count); // 결과 저장
}

console.log(result.join("\n"));

// DFS 함수
function dfs(x, y, graph, visited, n, m) {
  visited[x][y] = true;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < m &&
      !visited[nx][ny] &&
      graph[nx][ny] === 1
    ) {
      dfs(nx, ny, graph, visited, n, m);
    }
  }
}
