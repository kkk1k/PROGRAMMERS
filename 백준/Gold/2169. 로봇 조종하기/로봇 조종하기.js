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

const dp = Array.from({ length: n }, () => Array(m).fill(0));
dp[0][0] = arr[0][0];
for (let i = 1; i < m; i++) {
  dp[0][i] = dp[0][i - 1] + arr[0][i];
}

for (let i = 1; i < n; i++) {
  const left = Array(m).fill(0);
  const right = Array(m).fill(0);

  left[m - 1] = dp[i - 1][m - 1] + arr[i][m - 1];
  for (let j = m - 2; j >= 0; j--) {
    left[j] = Math.max(dp[i - 1][j], left[j + 1]) + arr[i][j];
  }

  right[0] = dp[i - 1][0] + arr[i][0];
  for (let j = 1; j < m; j++) {
    right[j] = Math.max(dp[i - 1][j], right[j - 1]) + arr[i][j];
  }

  for (let k = 0; k < m; k++) {
    dp[i][k] = Math.max(left[k], right[k]);
  }
}
console.log(dp[n - 1][m - 1]);
