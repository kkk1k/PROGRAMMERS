const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const stack = [];
const prt = [];
for (let i = 1; i < 1 + num; i++) {
  const [order, number] = input[i].split(" ").map(Number);
  if (order === 1) {
    stack.push(number);
  } else if (order === 2) {
    if (stack.length !== 0) {
      prt.push(stack.pop());
    } else {
      prt.push(-1);
    }
  } else if (order === 3) {
    prt.push(stack.length);
  } else if (order === 4) {
    if (stack.length !== 0) {
      prt.push(0);
    } else {
      prt.push(1);
    }
  } else if (order === 5) {
    if (stack.length !== 0) {
      prt.push(stack[stack.length - 1]);
    } else {
      prt.push(-1);
    }
  }
}

console.log(prt.join("\n"));
