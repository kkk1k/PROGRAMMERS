const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].trim().split(""));
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let max = 0;

function dfs(x, y, count, visited) {
  max = Math.max(max, count);
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
      // 알파벳을 0 ~ 25 범위의 숫자로 변환 (A=0, B=1, ...)
      const letter = graph[nx][ny].charCodeAt(0) - 65;
      // 해당 알파벳이 아직 방문되지 않았다면
      if ((visited & (1 << letter)) === 0) {
        dfs(nx, ny, count + 1, visited | (1 << letter));
      }
    }
  }
}

const initial = 1 << (graph[0][0].charCodeAt(0) - 65);
dfs(0, 0, 1, initial);
console.log(max);
