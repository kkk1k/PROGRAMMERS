const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const graph = [];
const visited = Array.from({ length: num }, () => Array(num).fill(false));
for (let i = 1; i <= num; i++) {
  graph.push(input[i].trim("\r").split(""));
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
const answer = [];
function dfs(x, y) {
  let count = 1;
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nextX = x + dx[i];
    const nextY = y + dy[i];

    if (
      nextX < num &&
      nextY < num &&
      nextX >= 0 &&
      nextY >= 0 &&
      !visited[nextX][nextY] &&
      graph[nextX][nextY] === "1"
    ) {
      count += dfs(nextX, nextY);
    }
  }

  return count;
}

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (!visited[i][j] && graph[i][j] === "1") {
      answer.push(dfs(i, j));
    }
  }
}
console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));
