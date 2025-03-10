const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

const graph = Array.from({ length: n + 1 }, () => []);

for (let i = 1; i <= m; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[v].push(u);
}
function dfs(i, visited) {
  visited[i] = true;
  let count = 1;

  if (graph[i].length !== 0) {
    for (let j = 0; j < graph[i].length; j++) {
      let item = graph[i][j];
      if (!visited[item]) {
        count += dfs(item, visited);
      }
    }
  }
  return count;
}
const obj = {};
for (let i = 1; i <= n; i++) {
  const visited = Array(n + 1).fill(false);
  obj[i] = dfs(i, visited);
}

const maxHacked = Math.max(...Object.values(obj));

const result = Object.keys(obj)
  .filter((a) => obj[a] === maxHacked)
  .map(Number)
  .sort((a, b) => a - b);
console.log(result.join(" "));
