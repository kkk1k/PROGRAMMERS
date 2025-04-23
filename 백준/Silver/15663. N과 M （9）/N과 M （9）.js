const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);
const answer = [];
const backtrack = (num, idx) => {
  if (num.length === m) {
    const key = num.join(" ");
    if (!answer.includes(key)) {
      answer.push(key);
    }
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!idx.includes(i)) {
      backtrack([...num, arr[i]], [...idx, i]);
    }
  }
  return;
};

for (let i = 0; i < n; i++) {
  backtrack([arr[i]], [i]);
}

answer.sort((a, b) => {
  const A = a.split(" ").map(Number);
  const B = b.split(" ").map(Number);
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      return A[i] - B[i];
    }
  }
  return 0;
});

console.log(answer.join("\n"));
