const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const dp = Array(11).fill(0);
const answer = [];
dp[1] = 1; // 1
dp[2] = 2; // 11, 2
dp[3] = 4; // 111 , 12, 21, 3

for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 1; i <= num; i++) {
  answer.push(dp[Number(input[i])]);
}
console.log(answer.join("\n"));
