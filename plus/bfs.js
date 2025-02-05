class Queue {
  constructor() {
    this.items = {};
    this.tailIndex = 0;
    this.headIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    if (this.tailIndex === this.headIndex) {
      return -1;
    }
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  isEmpty() {
    return this.headIndex === this.tailIndex;
  }
}

function solution(graph, start) {
  const adjList = {};
  for (let i of graph) {
    let [u, v] = i;
    if (adjList[u] === undefined) {
      adjList[u] = [];
    }
    adjList[u].push(v);
  }
  const visited = new Set();
  const answer = [];

  function bfs(node) {
    visited.add(node);
    answer.push(node);
    let queue = new Queue();
    queue.enqueue(node);
    while (!queue.isEmpty()) {
      let item = queue.dequeue();
      if (adjList[item] !== undefined) {
        for (let i of adjList[item]) {
          if (!visited.has(i)) {
            queue.enqueue(i);
            visited.add(i);
            answer.push(i);
          }
        }
      }
    }
  }
  bfs(start);

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [3, 7],
      [4, 8],
      [5, 8],
      [6, 9],
      [7, 9],
    ],
    1
  )
); // 반환값 :[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(
  solution(
    [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 0],
    ],
    1
  )
); // 반환값 : [1, 2, 3, 4, 5, 0]
