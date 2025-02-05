const fs = require("fs");
const input = fs
  .readFileSync(
     "/dev/stdin" 
  )
  .toString()
  .trim()
  .split("\n");

const [num, root, query] = input[0].split(" ").map(Number);
let tree = Array.from({ length: num + 1 }, () => []);
const answer = [];
for (let i = 1; i < num; i++) {
  let edge = input[i];
  let [u, v] = edge.split(" ").map(Number);
  tree[u].push(v);
  tree[v].push(u);
}

const subtree = Array(num + 1).fill(0);
const visited = Array(num + 1).fill(false);

function dfs(node) {
  visited[node] = true;
  subtree[node] = 1;

  for (let next of tree[node]) {
    if (!visited[next]) {
      subtree[node] += dfs(next);
    }
  }
  return subtree[node];
}

dfs(root);

// 쿼리 처리
for (let i = num; i < num + query; i++) {
  let item = Number(input[i]);
  answer.push(subtree[item]); // 미리 계산된 서브트리 크기 사용
}

console.log(answer.join("\n"));
