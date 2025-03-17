const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const dp = Array(num + 1).fill(0);

dp[1] = 0;
dp[2] = 1;
dp[3] = 1;
if (num < 3) {
  console.log(dp[num]);
} else {
  for (let i = 4; i <= num; i++) {
    if (i % 3 === 0 && i % 2 === 0) {
      dp[i] = Math.min(dp[i / 3], dp[i / 2], dp[i - 1]) + 1;
    } else if (i % 3 === 0) {
      dp[i] = Math.min(dp[i / 3], dp[i - 1]) + 1;
    } else if (i % 2 === 0) {
      dp[i] = Math.min(dp[i / 2], dp[i - 1]) + 1;
    } else {
      dp[i] = dp[i - 1] + 1;
    }
  }
  console.log(dp[num]);
}
