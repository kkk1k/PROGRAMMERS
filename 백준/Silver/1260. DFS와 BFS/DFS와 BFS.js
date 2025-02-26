const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [nodes, edges, start] = input[0].split(" ").map(Number);
const graph = Array.from({ length: nodes + 1 }, () => []);
for (let i = 1; i <= edges; i++) {
  let [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

graph.forEach((item) => {
  item.sort((a, b) => a - b);
});

const dfsArr = [];
const bfsArr = [];

const dfs = (first) => {
  let stack = [];
  const dfsVisited = Array(nodes + 1).fill(false);

  const helper = (node) => {
    dfsArr.push(node);
    dfsVisited[node] = true;

    for (let i = 0; i < graph[node].length; i++) {
      let item = graph[node][i];
      if (!dfsVisited[item]) {
        helper(item);
      }
    }
  };

  helper(first);
};

const bfs = (first) => {
  let queue = [];
  const bfsVisited = Array(nodes + 1).fill(false);

  const helper = (node) => {
    bfsVisited[node];
    queue.push(node);
    while (queue.length > 0) {
      let item = queue.shift();
      bfsVisited[item] = true;
      bfsArr.push(item);
      for (let i = 0; i < graph[item].length; i++) {
        let acd = graph[item][i];
        if (!bfsVisited[acd]) {
          bfsVisited[acd] = true;
          queue.push(acd);
        }
      }
    }
  };

  helper(first);
};

dfs(start);
bfs(start);

console.log(dfsArr.join(" "));
console.log(bfsArr.join(" "));
