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
let answer = 0;
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

function dfs(idx) {
  if (idx === n) {
    const cnt = arr.filter((item) => item[0] <= 0).length;
    answer = Math.max(answer, cnt);
    return;
  }

  if (arr[idx][0] <= 0) {
    dfs(idx + 1);
    return;
  }
  let hit = false;
  for (let i = 0; i < n; i++) {
    if (idx === i || arr[i][0] <= 0) continue;
    const org1 = arr[idx][0];
    const org2 = arr[i][0];
    arr[idx][0] -= arr[i][1];
    arr[i][0] -= arr[idx][1];
    hit = true;
    dfs(idx + 1);
    arr[idx][0] = org1;
    arr[i][0] = org2;
  }
  if (!hit) dfs(idx + 1);
}
dfs(0);

console.log(answer);
