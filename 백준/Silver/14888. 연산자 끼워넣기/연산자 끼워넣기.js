const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const count = input[2].split(" ").map(Number);

let min = Infinity;
let max = -Infinity;

const dfs = (idx, sum) => {
  if (idx === n) {
    min = Math.min(min, sum);
    max = Math.max(max, sum);
    return;
  }

  for (let i = 0; i < 4; i++) {
    if (count[i] <= 0) continue;
    count[i] -= 1;
    if (i === 0) {
      dfs(idx + 1, sum + arr[idx]);
    } else if (i === 1) {
      dfs(idx + 1, sum - arr[idx]);
    } else if (i === 2) {
      dfs(idx + 1, sum * arr[idx]);
    } else {
      if (sum < 0) {
        dfs(idx + 1, Math.trunc(sum / arr[idx]));
      } else {
        dfs(idx + 1, Math.trunc(sum / arr[idx]));
      }
    }
    count[i] += 1;
  }
};

dfs(1, arr[0]);
if (max === -0) {
  max = 0;
}
if (min === -0) {
  min = 0;
}
console.log(max);
console.log(min);
