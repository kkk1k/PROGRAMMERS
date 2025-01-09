const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [num, k] = input[0].split(" ").map(Number);
let queue = [];
for (let i = 1; i <= num; i++) {
  queue.push(i);
}
k -= 1;
let answer = [];
let idx = 0;
while (queue.length > 0) {
  idx = (idx + k) % queue.length;
  answer.push(queue.splice(idx, 1)[0]);
}

console.log(`<${answer.join(", ")}>`);
