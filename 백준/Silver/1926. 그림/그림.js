const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const visited = Array.from({ length: n }, () => Array(m).fill(false));
const graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function dfs(x, y) {
  let count = 1;
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nextX = x + dx[i];
    const nextY = y + dy[i];

    if (
      nextX >= 0 &&
      nextY >= 0 &&
      nextX < n &&
      nextY < m &&
      !visited[nextX][nextY] &&
      graph[nextX][nextY] === 1
    ) {
      count += dfs(nextX, nextY);
    }
  }
  return count;
}
const answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j] && graph[i][j] === 1) {
      answer.push(dfs(i, j));
    }
  }
}

console.log(answer.length);
if (answer.length === 0) {
  console.log(0);
} else {
  console.log(answer.sort((a, b) => b - a)[0]);
}
