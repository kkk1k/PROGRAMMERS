const fs = require("fs");
const input = fs
  .readFileSync( "/dev/stdin" )
  .toString()
  .trim()
  .split(" ");

const N = Number(input[0]);
const M = Number(input[1]);

const result = [];
const sequence = [];
const visited = Array(N + 1).fill(false);

function dfs(depth) {
  if (depth === M) {
    result.push(sequence.join(" "));
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (
      !visited[i] &&
      (sequence.length === 0 || sequence[sequence.length - 1] < i)
    ) {
      visited[i] = true;
      sequence.push(i);
      dfs(depth + 1);
      sequence.pop();
      visited[i] = false;
    }
  }
}

dfs(0);
console.log(result.join("\n"));
