const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");
const n = Number(input[0]);

const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const dp = Array.from({ length: n + 1 }, () => 0);

for (let i = 0; i < n; i++) {
  if (dp[i] > dp[i + 1]) {
    dp[i + 1] = dp[i];
  }
  if (i + arr[i][0] < n + 1 && dp[i] + arr[i][1] > dp[i + arr[i][0]]) {
    dp[i + arr[i][0]] = dp[i] + arr[i][1];
  }
}
console.log(dp[n]);
