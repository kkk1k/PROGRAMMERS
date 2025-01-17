const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [a, b] = input[0].split(" ").map(Number);

const arrA = input[1].split(" ").map(Number);

const arrB = input[2].split(" ").map(Number);

const hashA = new Set(arrA);
const intersection = arrB.filter((item) => hashA.has(item));

console.log(arrA.length + arrB.length - intersection.length * 2);
