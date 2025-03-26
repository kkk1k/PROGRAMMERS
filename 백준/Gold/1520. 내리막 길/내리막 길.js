const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const [n, m] = input[0].split(" ").map(Number);

const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const dp = Array.from({ length: n }, () => Array(m).fill(-1));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function dfs(x, y) {
  if (y === n - 1 && x === m - 1) return 1;

  if (dp[y][x] !== -1) return dp[y][x];

  dp[y][x] = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && ny < n && nx < m && arr[y][x] > arr[ny][nx]) {
      dp[y][x] += dfs(nx, ny);
    }
  }

  return dp[y][x];
}

console.log(dfs(0, 0));
