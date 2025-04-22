const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").sort();
const check = ["a", "e", "i", "o", "u"];
const arrAe = arr.filter((item) => check.includes(item));
const answer = [];

const backTrack = (str, pos, moCnt) => {
  if (str.length === n && moCnt >= 1 && str.length - moCnt >= 2) {
    answer.push(str);
    return;
  }

  for (let i = pos + 1; i < m; i++) {
    if (arr[pos] < arr[i]) {
      if (arrAe.includes(arr[i])) {
        backTrack(str.concat(arr[i]), i, moCnt + 1);
      } else {
        backTrack(str.concat(arr[i]), i, moCnt);
      }
    }
  }
};

for (let i = 0; i <= m - n; i++) {
  if (arrAe.includes(arr[i])) {
    backTrack(arr[i], i, 1);
  } else {
    backTrack(arr[i], i, 0);
  }
}

console.log(answer.sort().join("\n"));
