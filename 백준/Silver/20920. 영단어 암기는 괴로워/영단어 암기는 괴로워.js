const input = require("fs")
  .readFileSync( "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [num, length] = input[0].split(" ").map(Number);
let obj = {};
for (let i = 1; i <= num; i++) {
  obj[input[i].trim()] = (obj[input[i].trim()] || 0) + 1;
}

let arr = Object.keys(obj).sort((a, b) => {
  if (obj[a] > obj[b]) {
    return -1;
  } else if (obj[a] < obj[b]) {
    return 1;
  } else {
    if (a.length !== b.length) {
      return b.length - a.length;
    } else {
      return a.localeCompare(b);
    }
  }
});

let answer = arr.filter((item) => item.length >= length);
console.log(answer.join("\n"));
