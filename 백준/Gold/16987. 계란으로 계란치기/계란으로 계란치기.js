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
  // 마지막 계란을 다 돌고 난후 개수 파악
  if (idx === n) {
    const cnt = arr.filter((item) => item[0] <= 0).length;

    answer = Math.max(answer, cnt);
    return;
  }

  // 때렷는지 안때렷는지 파악
  let didHit = false;

  for (let i = 0; i < n; i++) {
    if (arr[idx][0] <= 0) continue;
    if (i === idx || arr[i][0] <= 0) continue;
    didHit = true;

    const originEggIdx = arr[idx][0];
    const originEggI = arr[i][0];

    arr[i][0] -= arr[idx][1];
    arr[idx][0] -= arr[i][1];

    dfs(idx + 1);

    arr[i][0] = originEggI;
    arr[idx][0] = originEggIdx;
  }

  if (!didHit) dfs(idx + 1);
}

dfs(0);

console.log(answer);
