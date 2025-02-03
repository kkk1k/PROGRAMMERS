const fs = require("fs");
const input = fs
  .readFileSync(
 "/dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

// 1. 입력 처리
const n = Number(input[0]);
const tree = Array.from({ length: n + 1 }, () => [-1, -1]);
const parent = Array(n + 1).fill(-1);

for (let i = 1; i <= n; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  tree[a] = [b, c];
  if (b !== -1) parent[b] = a;
  if (c !== -1) parent[c] = a;
}

// 2. 중위 순회(Inorder Traversal)를 통해 마지막 노드 구하기
let stack = [];
let node = 1;
let inorderLast = null;

while (stack.length > 0 || node !== -1) {
  // 왼쪽 자식 계속 내려감
  while (node !== -1) {
    stack.push(node);
    node = tree[node][0]; // 왼쪽 자식
  }
  node = stack.pop();
  inorderLast = node; // 중위 순회에서 방문하는 순서대로 업데이트하면, 마지막 방문한 노드가 저장됨
  node = tree[node][1]; // 오른쪽 자식으로 이동
}

// 3. 유사 중위 순회 시뮬레이션
const visited = Array(n + 1).fill(false);
visited[1] = true;
let current = 1;
let count = 0;

while (true) {
  const left = tree[current][0];
  const right = tree[current][1];

  // 1단계: 왼쪽 자식 존재 및 미방문 → 왼쪽 이동
  if (left !== -1 && !visited[left]) {
    current = left;
    visited[left] = true;
    count++;
    continue;
  }
  // 2단계: 오른쪽 자식 존재 및 미방문 → 오른쪽 이동
  if (right !== -1 && !visited[right]) {
    current = right;
    visited[right] = true;
    count++;
    continue;
  }
  // 3단계: 현재 노드가 중위 순회 마지막 노드이면 종료
  if (current === inorderLast) {
    break;
  }
  // 4단계: 위 조건에 해당하지 않으면 부모로 이동
  current = parent[current];
  count++;
}

console.log(count);
