const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

const answer = [];
const arr = [];

function dfs() {
  if (arr.length > 0) answer.push(Number(arr.join("")));

  for (let i = 0; i <= 9; i++) {
    if (arr.length === 0 || arr[arr.length - 1] > i) {
      arr.push(i);
      dfs();
      arr.pop();
    }
  }
}

dfs();

answer.sort((a, b) => a - b);
if (n > 1) {
  console.log(answer[n - 1] || -1);
} else {
  console.log(answer[0]);
}
