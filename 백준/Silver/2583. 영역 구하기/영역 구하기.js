const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, m, num] = input[0].split(" ").map(Number);
const graph = Array.from({ length: m }, () => Array(n).fill(0));
const visited = Array.from({ length: m }, () => Array(n).fill(false));

for (let i = 1; i <= num; i++) {
  const [a, b, c, d] = input[i].split(" ").map(Number);
  for (let x = a; x < c; x++) {
    for (let y = b; y < d; y++) {
      graph[x][y] = 1;
    }
  }
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
      nextX >= 0 &&
      nextY >= 0 &&
      nextX < m &&
      nextY < n &&
      graph[nextX][nextY] === 0 &&
      !visited[nextX][nextY]
    ) {
      count += dfs(nextX, nextY);
    }
  }

  return count;
}

for (let x = 0; x < m; x++) {
  for (let y = 0; y < n; y++) {
    if (!visited[x][y] && graph[x][y] === 0) {
      answer.push(dfs(x, y));
    }
  }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join(" "));
