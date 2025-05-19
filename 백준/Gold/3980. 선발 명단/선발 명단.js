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
for (let i = 0; i < n; i++) {
  const arr = [];
  const visited = Array.from({ length: 11 }, () => false);
  let best = 0;
  for (let j = i * 11 + 1; j <= (i + 1) * 11; j++) {
    arr.push(input[j].split(" ").map(Number));
  }

  function dfs(idx, sum) {
    if (idx === 11) {
      best = Math.max(sum, best);
      return;
    }

    for (let i = 0; i < 11; i++) {
      if (visited[i] === 1 || arr[idx][i] === 0) continue;
      visited[i] = 1;
      dfs(idx + 1, sum + arr[idx][i]);
      visited[i] = 0;
    }
  }

  dfs(0, 0);
  answer.push(best);
}

console.log(answer.join("\n"));
