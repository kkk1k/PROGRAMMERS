const input = require("fs")
  .readFileSync( "/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const arr = [];
for (let i = 1; i <= num; i++) {
  arr.push(Number(input[i].trim()));
}
const ans = [];
let mean = arr.reduce((a, b) => a + b, 0) / arr.length;

let center = arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];
let obj = {};
let max = 0;
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] !== undefined) {
    obj[arr[i]] += 1;
  } else {
    obj[arr[i]] = 1;
  }
  if (obj[arr[i]] > max) {
    max = obj[arr[i]];
  }
}

let frq = [];
for (let key in obj) {
  if (obj[key] >= max) {
    frq.push(key);
  }
}

let freq = frq[0];
frq.sort((a, b) => a - b);
if (frq.length >= 2) {
  freq = frq[1];
}

if (mean.toFixed() === "-0") {
  mean = 0;
}

ans.push(mean.toFixed());
ans.push(center);
ans.push(freq);
ans.push(arr[arr.length - 1] - arr[0]);
console.log(ans.join("\n"));
