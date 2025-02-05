const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [neuron, synapse] = input[0].split(" ").map(Number);

const parent = Array.from({ length: neuron + 1 }, (_, idx) => idx);

function find(x) {
  if (parent[x] === x) return x;
  else {
    parent[x] = find(parent[x]);
    return parent[x];
  }
}

function union(x, y) {
  const rootX = find(x);
  const rootY = find(y);

  if (rootX !== rootY) {
    parent[rootX] = rootY;
  }
}

for (let i = 1; i <= synapse; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  union(x, y);
}

const components = new Set();
for (let i = 1; i <= neuron; i++) {
  components.add(find(i));
}
const countRoot = components.size;

// 사이클이 있어 제거해야 하는 경우
let delRoot = countRoot - (neuron - synapse);

// 추가적으로 이어줘야 하는 간선
let plusRoot = countRoot - 1;

let answer = delRoot + plusRoot;
console.log(answer);
