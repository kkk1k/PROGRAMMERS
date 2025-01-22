// 루트 노드 찾기
function find(parents, x) {
  if (parents[x] === x) {
    return x;
  } else {
    // 각 노드 값이 루트 노드로 설정되어 있지 않으면 경로압축
    parents[x] = find(parents, parents[x]);
    return parents[x];
  }
}

function union(parents, x, y) {
  const root1 = find(parents, x);
  const root2 = find(parents, y);
  parents[root1] = root2;
}

// 유니온 파인드 구현
function solution(k, operation) {
  const parents = Array.from({ length: k }, (_, idx) => idx);
  let answer = 0;
  let lst = [];
  for (let op of operation) {
    if (op[0] === "u") {
      union(parents, op[1], op[2]);
    } else if (op[0] === "f") {
      find(parents, op[1]);
    }
  }

  for (let i = 0; i < parents.length; i++) {
    lst.push(find(parents, i));
  }
  return [...new Set(lst)].length;
}
