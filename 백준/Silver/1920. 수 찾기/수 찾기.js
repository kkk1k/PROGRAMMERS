const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const answer = [];
const obj = {};
const arr = input[1].split(" ").map(Number);
for (let i of arr) {
  obj[i] = true;
}
const m = Number(input[2]);
const check = input[3].split(" ").map(Number);
check.forEach((item) => {
  if (obj[item]) {
    answer.push(1);
  } else {
    answer.push(0);
  }
});

console.log(answer.join("\n"));
