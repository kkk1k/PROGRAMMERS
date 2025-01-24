const fs = require("fs");
const input = fs
  .readFileSync(
     "/dev/stdin" 
  )
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const del = Number(input[2]);
const tree = Array.from({ length: num }, () => []);
const deleted = Array(num).fill(false);
const parent = Array(num).fill(-1);

// 부모 정보와 트리 구성
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== -1) {
    tree[arr[i]].push(i);
    parent[i] = arr[i];
  }
}

function dfs(node) {
  deleted[node] = true;
  
  // 현재 노드의 부모
  const parentNode = parent[node];
  
  // 부모의 자식 목록에서 현재 노드 제거
  if (parentNode !== -1 && tree[parentNode]) {
    tree[parentNode] = tree[parentNode].filter(child => child !== node);
  }
  
  // 현재 노드의 자식들 재귀적으로 삭제
  for (let child of tree[node]) {
    if (!deleted[child]) {
      dfs(child);
    }
  }
  
  // 현재 노드의 자식들 초기화
  tree[node] = [];
}

// 노드 삭제
dfs(del);

// 루트를 찾음
const root = arr.indexOf(-1);

// 리프 노드 카운트
function countLeafNodes(node) {
  if (node === del) return 0;
  if (tree[node].length === 0) return 1;
  
  let leafCount = 0;
  for (let child of tree[node]) {
    leafCount += countLeafNodes(child);
  }
  return leafCount;
}

// 루트부터 리프 노드 카운트
console.log(countLeafNodes(root));