const input = require("fs")
  .readFileSync( "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const stack = [];
let i = 1;
while (true) {
  if (arr.length === 0) {
    if (stack.length === 0) {
      console.log("Nice");
      break;
    } else if (i !== stack[stack.length - 1]) {
      console.log("Sad");
      break;
    }
  }
  if (arr[0] === i) {
    arr.shift();
    i++;
  } else if (arr[0] !== i && i !== stack[stack.length - 1]) {
    stack.push(arr.shift());
  } else if (i === stack[stack.length - 1]) {
    stack.pop();
    i++;
  }
}
