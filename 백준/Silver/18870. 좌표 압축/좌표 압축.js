const input = require("fs")
  .readFileSync( "/dev/stdin" )
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);

let ans = input[1].trim().split(" ").map(Number);
let copAns = [...new Set(ans)].sort((a, b) => a - b);
let obj = {};
for (let i = 0; i < copAns.length; i++) {
  obj[copAns[i]] = i;
}
let answer = [];
for (let i = 0; i < num; i++) {
  answer.push(obj[ans[i]]);
}

console.log(answer.join(" "));
