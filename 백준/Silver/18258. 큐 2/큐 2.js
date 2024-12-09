const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    if (this.tailIndex === this.headIndex) return -1;
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.tailIndex === this.headIndex ? -1 : this.items[this.headIndex];
  }

  back() {
    return this.tailIndex === this.headIndex ? -1 : this.items[this.tailIndex - 1];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }

  isEmpty() {
    return this.getLength() === 0 ? 1 : 0;
  }
}

const num = Number(input[0]);
const queue = new Queue();
const result = [];

for (let i = 1; i <= num; i++) {
  const [command, value] = input[i].trim().split(" ");

  if (command === "push") {
    queue.enqueue(value);
  } else if (command === "pop") {
    result.push(queue.dequeue());
  } else if (command === "size") {
    result.push(queue.getLength());
  } else if (command === "empty") {
    result.push(queue.isEmpty());
  } else if (command === "front") {
    result.push(queue.peek());
  } else if (command === "back") {
    result.push(queue.back());
  }
}

console.log(result.join("\n"));
