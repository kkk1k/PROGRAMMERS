const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
let graph = Array.from({ length: n + 1 }, () => []);

input.slice(2).forEach((item) => {
  let [x, y] = item.split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
});

let visited = Array.from({ length: n + 1 }, () => false);
let cnt = 0;

function dfs(x) {
  visited[x] = true;
  cnt++;
  for (let i of graph[x]) {
    if (!visited[i]) {
      dfs(i);
    }
  }
}

dfs(1);

console.log(cnt - 1);
