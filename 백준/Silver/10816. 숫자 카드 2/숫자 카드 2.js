const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const sanguen = input[1].split(" ").map(Number);

let obj = {};
let ans = [];
for (let i of sanguen) {
  if (obj[i] === undefined) {
    obj[i] = 1;
  } else {
    obj[i] += 1;
  }
}

const M = Number(input[2]);
const correct = input[3].split(" ").map(Number);

for (let i of correct) {
  if (obj[i] !== undefined) {
    ans.push(obj[i]);
  } else {
    ans.push(0);
  }
}

console.log(ans.join(" "));
