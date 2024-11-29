const input = require("fs")
  .readFileSync( "/dev/stdin" )
  .toString()
  .trim()
  .split("\n");

let [node, num] = input[0].split(" ").map(Number);
let obj = {};
for (let i = 1; i <= node - 1; i++) {
  let [a, b, length] = input[i].split(" ").map(Number);
  if (!obj[a]) obj[a] = [];
  if (!obj[b]) obj[b] = [];
  obj[a].push([b, length]);
  obj[b].push([a, length]);
}

function dfs(a, b, length, visited) {
  if (visited[a]) return;
  visited[a] = true;
  if (a === b) {
    return length;
  }
  for (let [nextNode, dist] of obj[a]) {
    if (!visited[nextNode]) {
      const result = dfs(nextNode, b, length + dist, visited);
      if (result !== undefined) return result;
    }
  }
}

for (let i = node; i < node + num; i++) {
  let visited = Array(node + 1).fill(false);
  let [a, b] = input[i].split(" ").map(Number);
  console.log(dfs(a, b, 0, visited));
}
