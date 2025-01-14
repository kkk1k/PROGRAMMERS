const fs = require("fs");
const input = fs
  .readFileSync( "/dev/stdin" )
  .toString()
  .trim()
  .split(" ");

const arr = input[0].trim();
const ans = [];
for (let i = 1; i <= arr.length; i++) {
  for (let j = 0; j <= arr.length - i; j++) {
    let item = arr.slice(j, j + i);
    ans.push(item);
  }
}
console.log([...new Set(ans)].length);
