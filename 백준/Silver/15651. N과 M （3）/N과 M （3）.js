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

function dfs(depth) {
  if (depth === M) {
    result.push(sequence.join(" "));
    return;
  }
  for (let i = 1; i <= N; i++) {
    sequence.push(i);
    dfs(depth + 1);
    sequence.pop();
  }
}

dfs(0);
console.log(result.join("\n"));
