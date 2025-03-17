const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);

const arr = input[1].split(" ").map(Number);
const dp = Array(num).fill(1);

for (let i = 1; i < num; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[j] > arr[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(dp.sort((a, b) => b - a)[0]);
