const input = require("fs")
  .readFileSync( "/dev/stdin" )
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);

let answer = [];

for (let i = 1; i <= num; i++) {
  let a = input[i].trim();
  if (!answer.includes(a)) {
    answer.push(a);
  }
}

answer.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length === b.length) {
    return a.localeCompare(b);
  } else {
    return 1;
  }
});

console.log(answer.join("\n"));
