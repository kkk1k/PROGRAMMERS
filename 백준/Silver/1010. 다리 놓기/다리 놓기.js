const input = require("fs")
  .readFileSync( "/dev/stdin" )
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);

let answer = [];

const factorial = (a) => {
  let ans = BigInt(1);
  for (let i = BigInt(1); i <= BigInt(a); i++) {
    ans *= i;
  }
  return ans;
};

for (let i = 1; i <= num; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  let save = factorial(b) / (factorial(a) * factorial(b - a));
  answer.push(save);
}

console.log(answer.join("\n"));
