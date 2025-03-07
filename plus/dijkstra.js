class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  insert(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }

    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return min;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex] <= this.items[index]) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallerChild =
        rightChild < this.size() &&
        this.items[rightChild] < this.items[leftChild]
          ? rightChild
          : leftChild;

      if (this.items[index] <= this.items[smallerChild]) {
        break;
      }

      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

function solution(graph, start) {
  const distances = {};
  for (let node in graph) {
    distances[node] = Infinity;
  }

  distances[start] = 0;

  const queue = new MinHeap();
  queue.insert([distances[start], start]);

  const paths = { [start]: [start] };

  while (queue.size() > 0) {
    const [currentDistance, currentNode] = queue.pop();

    if (distances[currentNode] < currentDistance) {
      continue;
    }

    for (const adjacentNode in graph[currentNode]) {
      const weight = graph[currentNode][adjacentNode];
      const distance = currentDistance + weight;

      if (distance < distances[adjacentNode]) {
        distances[adjacentNode] = distance;
        paths[adjacentNode] = [...paths[currentNode], adjacentNode];

        queue.insert([distance, adjacentNode]);
      }
    }
  }

  return distances;
}

console.log(solution({ A: { B: 9, C: 3 }, B: { A: 5 }, C: { B: 1 } }, "A"));
// [{'A': 0, 'B': 4, 'C': 3}, {'A': ['A'], 'B': ['A', 'C', 'B'], 'C': ['A', 'C']}]

console.log(solution({ A: { B: 1 }, B: { C: 5 }, C: { D: 1 }, D: {} }, "A"));
// [{'A': 0, 'B': 1, 'C': 6, 'D': 7}, {'A': ['A'], 'B': ['A', 'B'], 'C': ['A', 'B', 'C'], 'D': ['A', 'B', 'C', 'D']}]
