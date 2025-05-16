const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
let answer = 0;
const visited = Array.from({ length: n }, () => Array(m).fill(0));
const check = (i, j) => {
  if (i === 0 || j === 0) return true;
  return !(visited[i - 1][j] && visited[i][j - 1] && visited[i - 1][j - 1]);
};

const dfs = (x, y) => {
  // x가 인덱스를 넘은 상태
  if (x === n) {
    answer++;
    return;
  }

  // y가 커지다가 더이상갈곳없으면 x커지고 y는 0으로
  const nx = y + 1 === m ? x + 1 : x;
  const ny = y + 1 === m ? 0 : y + 1;

  dfs(nx, ny);

  if (check(x, y)) {
    visited[x][y] = 1;
    dfs(nx, ny);
    visited[x][y] = 0;
  }
};

dfs(0, 0);

console.log(answer);
