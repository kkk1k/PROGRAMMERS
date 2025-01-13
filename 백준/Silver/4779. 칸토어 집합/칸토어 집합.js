const input = require("fs")
  .readFileSync( "/dev/stdin" )
  .toString()
  .trim()
  .split("\n");

const num = input.map(Number);
const answer = [];

for (let i of num) {
  let str = "-".repeat(3 ** i);
  answer.push(kant(str));
}

function kant(arr) {
  if (arr.length === 1) {
    return arr; // '-' 문자가 없으면 더 이상 처리하지 않음
  }

  let len = arr.length;
  let firstIdx = Math.floor(len / 3);

  let first = arr.slice(0, firstIdx);
  let second = arr.slice(firstIdx, firstIdx * 2).replaceAll("-", " ");
  let third = arr.slice(firstIdx * 2);

  let ans = kant(first) + second + kant(third);
  return ans;
}

console.log(answer.join("\n"));
