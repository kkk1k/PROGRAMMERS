function solution(graph, start) {
  const adjList = {};
  const answer = [];
  for (let i of graph) {
    let [u, v] = i;
    if (adjList[u] === undefined) {
      adjList[u] = [];
    }
    adjList[u].push(v);
  }

  let visited = new Set();

  function dfs(n) {
    visited.add(n);
    answer.push(n);
    if (adjList[n] !== undefined) {
      for (let i of adjList[n]) {
        if (!visited.has(i)) {
          dfs(i);
        }
      }
    }
  }

  dfs(start);
  return answer;
}

console.log(
  solution(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
    ],
    "A"
  )
); // 반환값 : ['A', 'B', 'C', 'D', 'E']
console.log(
  solution(
    [
      ["A", "B"],
      ["A", "C"],
      ["B", "D"],
      ["B", "E"],
      ["C", "F"],
      ["E", "F"],
    ],
    "A"
  )
); // 반환값 : ['A', 'B', 'D', 'E', 'F', 'C']
