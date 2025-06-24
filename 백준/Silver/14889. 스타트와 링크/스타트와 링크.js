const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const answer = [];
const combArr = [];

const comb = (item, start) => {
  if (item.length === n / 2) {
    combArr.push(item);
    return;
  }
  for (let i = start + 1; i <= n; i++) {
    item.push(i);
    comb([...item], i);
    item.pop();
  }
};

const arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 1; i <= n; i++) {
  comb([i], i);
}

let total = [];
for (let i = 1; i <= n; i++) total.push(i);
for (let item of combArr) {
  let anotherTeam = total.filter((x) => !item.includes(x));
  let start = 0;
  let link = 0;
  for (let i = 0; i < item.length; i++) {
    for (let j = i + 1; j < item.length; j++) {
      start += arr[item[i] - 1][item[j] - 1] + arr[item[j] - 1][item[i] - 1];
    }
  }

  for (let i = 0; i < anotherTeam.length; i++) {
    for (let j = i + 1; j < anotherTeam.length; j++) {
      link +=
        arr[anotherTeam[i] - 1][anotherTeam[j] - 1] +
        arr[anotherTeam[j] - 1][anotherTeam[i] - 1];
    }
  }
  answer.push(Math.abs(start - link));
}

console.log(answer.sort((a, b) => a - b)[0]);
