const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const num = input[0];

if (num === 1) {
  console.log(input[1]);
  process.exit(0);
}

const dp = Array(num + 1).fill(0);

dp[1] = input[1];
dp[2] = input[1] + input[2];

for (let i = 3; i <= num; i++) {
  dp[i] = Math.max(dp[i - 2], dp[i - 3] + input[i - 1]) + input[i];
}

console.log(dp[num]);
