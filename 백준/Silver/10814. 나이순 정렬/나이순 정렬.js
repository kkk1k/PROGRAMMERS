const input = require("fs")
  .readFileSync( "/dev/stdin" )
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);

let ans = [];

for (let i = 1; i <= num; i++) {
  ans.push(input[i].trim().split(" "));
}

ans.sort((a, b) => {
  let numA = Number(a[0]);
  let numB = Number(b[0]);
  if (numA < numB) {
    return -1;
  } else {
    return 1;
  }
});

let result = ans.map((item) => item.join(" "));

console.log(result.join("\n"));
