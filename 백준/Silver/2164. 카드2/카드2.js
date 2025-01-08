const input = require("fs")
  .readFileSync( "/dev/stdin" )
  .toString()
  .trim()
  .split("\n");

let num = Number(input);

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
    if (this.headIndex === this.tailIndex) {
      return -1;
    } else {
      delete this.item[this.headIndex];
      this.headIndex++;
      return item;
    }
  }

  peek() {
    return this.item[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let queue = new Queue();

for (let i = 1; i <= num; i++) {
  queue.enqueue(i);
}

let i = 1;
while (queue.getLength() > 1) {
  if (i % 2 === 1) {
    queue.dequeue();
  } else {
    let save = queue.dequeue();
    queue.enqueue(save);
  }
  i++;
}

console.log(queue.peek());
