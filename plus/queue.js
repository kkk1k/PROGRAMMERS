const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

class Queue {
  constructor() {
    this.item = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.item[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.item[this.headIndex];
    if (this.tailIndex === this.headIndex) {
      return -1;
    }
    delete this.item[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    const item = this.item[this.headIndex];
    if (this.tailIndex === this.headIndex) {
      return -1;
    }
    return item;
  }

  back() {
    return this.tailIndex === this.headIndex
      ? -1
      : this.item[this.tailIndex - 1];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }

  isEmpty() {
    return this.tailIndex === this.headIndex ? 1 : 0;
  }
}

const num = Number(input[0]);
const queue = new Queue();
const result = [];

for (let i = 1; i < 1 + num; i++) {
  const [command, value] = input[i].trim().split(" ");

  switch (command) {
    case "push":
      queue.enqueue(value);
      break;
    case "pop":
      result.push(queue.dequeue());
      break;
    case "size":
      result.push(queue.getLength());
      break;
    case "empty":
      result.push(queue.isEmpty());
      break;
    case "front":
      result.push(queue.peek());
      break;
    case "back":
      result.push(queue.back());
      break;
  }
}

console.log(result.join("\n"));
