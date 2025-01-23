const fs = require("fs");
const input = fs
  .readFileSync(
 "/dev/stdin"
  )
  .toString()
  .trim()
  .split("\n");

const answer = [];

function solution(data) {
  const arr = data.map((i) => i.split(" ").map(Number));
  let currentLine = 0;
  let caseNumber = 1;

  while (currentLine < arr.length) {
    const [n, m] = arr[currentLine];
    currentLine++;

    // 입력의 마지막을 나타내는 '0 0'인 경우 종료
    if (n === 0 && m === 0) {
      break;
    }

    // m개의 간선 정보를 읽어 배열에 저장
    const edges = [];
    for (let i = 0; i < m; i++) {
      if (currentLine >= arr.length) break; // 안전 장치
      const [u, v] = arr[currentLine];
      edges.push([u, v]);
      currentLine++;
    }

    // act 함수에 현재 테스트 케이스 전달
    act(caseNumber, n, m, edges);
    caseNumber++;
  }
}

function find(parents, x) {
  if (parents[x] === x) return x;
  parents[x] = find(parents, parents[x]);
  return parents[x];
}

function union(parents, x, y) {
  const root1 = find(parents, x);
  const root2 = find(parents, y);
  if (root1 === root2) {
    for (let i = 0; i < parents.length; i++) {
      if (find(parents, i) === root1) {
        parents[i] = 0;
      }
    }
  } else {
    parents[root2] = root1;
  }
}

function act(caseNumber, n, m, edges) {
  let parents = Array.from({ length: n + 1 }, (_, idx) => idx);

  for (let i of edges) {
    let [x, y] = i;
    union(parents, x, y);
  }

  for (let i = 1; i <= n; i++) {
    parents[i] = find(parents, i);
  }

  let len = [...new Set(parents)].length - 1;
  switch (len) {
    case 0:
      answer.push(`Case ${caseNumber}: No trees.`);
      break;
    case 1:
      answer.push(`Case ${caseNumber}: There is one tree.`);
      break;
    default:
      answer.push(`Case ${caseNumber}: A forest of ${len} trees.`);
      break;
  }
}

solution(input);
console.log(answer.join("\n"));
