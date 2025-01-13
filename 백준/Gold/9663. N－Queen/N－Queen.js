const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");

const num = Number(input[0]);
let answer = 0;
const possible = (board, row) => {
  for (let i = 1; i < row; i++) {
    if (board[i] === board[row]) {
      return false;
    }
    if (Math.abs(board[row] - board[i]) === Math.abs(row - i)) {
      return false;
    }
  }
  return true;
};

function dfs(board, row) {
  if (row === num) {
    answer++;
  } else {
    for (let i = 1; i <= num; i++) {
      board[row + 1] = i;
      if (possible(board, row + 1)) {
        dfs(board, row + 1);
      }
    }
  }
}

for (let i = 1; i <= num; i++) {
  const board = Array(num + 1).fill(0);
  board[1] = i;
  dfs(board, 1);
}

console.log(answer);
