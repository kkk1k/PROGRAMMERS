const fs = require("fs");
const input = fs
  .readFileSync(
     "/dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const arr = input
  .slice(1)
  .map((item) => item.trim("\r").split(" ").map(Number));

let visited = Array.from({ length: num }, () => false);
let graph = Array.from({ length: num }, () => []);
let parent = Array.from({ length: num }, () => 0);
const queue = [];

queue.push(1);
visited[0] = true;

for (let i of arr) {
  let [a, b] = i;
  graph[a - 1].push(b);
  graph[b - 1].push(a);
}
while (queue.length > 0) {
  const curr = queue.shift();
  for (let next of graph[curr - 1]) {
    if (!visited[next - 1]) {
      visited[next - 1] = true;
      parent[next - 1] = curr;
      queue.push(next);
    }
  }
}

for (let i = 1; i < parent.length; i++) {
  console.log(parent[i]);
}
