const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, h] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let right = arr[arr.length - 1];
let left = 0;
let answer = 0;
while (left <= right) {
  let mid = Math.floor((right + left) / 2);
  let save = 0;
  for (let i of arr) {
    if (i > mid) {
      save += i - mid;
    }
  }
  if (save >= h) {
    answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
console.log(answer);
