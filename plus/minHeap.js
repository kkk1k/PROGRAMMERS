class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  push(item) {
    this.items.push(item);
    bubbleUp();
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }
    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    bubbleDown();
    return min;
  }

  swap(a, b) {
    return ([this.items[a], this.items[b]] = [this.items[b], this.items[a]]);
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[index] >= this.items[parentIndex]) {
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
      let smallChild =
        rightChild < this.size() &&
        this.items[rightChild] < this.items[leftChild]
          ? rightChild
          : leftChild;
      if (smallChild >= this.items[index]) {
        break;
      }

      this.swap(index, smallChild);
      index = smallChild;
    }
  }
}
