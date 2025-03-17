const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const num = input[0];

if (num === 1) {
  console.log(1);
  process.exit(0);
}

const dp = Array(num + 1).fill(0);

dp[1] = 1;
dp[2] = 2;
for (let i = 3; i <= num; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 10007; // 모듈러 연산 적용
}
console.log(dp[num]);
