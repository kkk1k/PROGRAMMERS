const input = require("fs")
  .readFileSync( "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

class Deque {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  isEmpty() {
    return this.tailIndex === this.headIndex ? true : false;
  }

  pushBack(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  pushFront(item) {
    if (this.headIndex === 0) {
      this.headIndex = -1;
      this.items[this.headIndex] = item;
    } else {
      this.headIndex--;
      this.items[this.headIndex] = item;
    }
  }

  popBack() {
    if (this.isEmpty()) {
      return -1;
    }
    this.tailIndex--;
    const item = this.items[this.tailIndex];
    delete this.items[this.tailIndex];
    return item;
  }

  popFront() {
    if (this.isEmpty()) {
      return -1;
    }
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peekFront() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.items[this.headIndex];
  }

  peekBack() {
    if (this.isEmpty()) {
      return -1;
    }
    return this.items[this.tailIndex - 1];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

let answer = [];
let num = Number(input[0]);
let deck = new Deque();
for (let i = 1; i <= num; i++) {
  let asd = input[i].split(" ").map(Number);
  let a = asd[0];
  switch (a) {
    case 1:
      deck.pushFront(asd[1]);
      break;
    case 2:
      deck.pushBack(asd[1]);
      break;
    case 3:
      if (deck.getLength()) {
        answer.push(deck.popFront());
      } else {
        answer.push(-1);
      }
      break;
    case 4:
      if (deck.getLength()) {
        answer.push(deck.popBack());
      } else {
        answer.push(-1);
      }
      break;
    case 5:
      answer.push(deck.getLength());
      break;
    case 6:
      if (deck.getLength()) {
        answer.push(0);
      } else {
        answer.push(1);
      }
      break;
    case 7:
      if (deck.getLength()) {
        answer.push(deck.peekFront());
      } else {
        answer.push(-1);
      }
      break;
    case 8:
      if (deck.getLength()) {
        answer.push(deck.peekBack());
      } else {
        answer.push(-1);
      }
      break;
  }
}

console.log(answer.join("\n"));
