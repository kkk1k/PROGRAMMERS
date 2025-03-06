const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
const graph = [];

for (let i = 1; i <= num; i++) {
  graph.push(input[i].split(" ").map(Number));
}

const max = graph.reduce((max, item) => {
  return Math.max(max, ...item);
}, 1);

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function dfs(x, y, z, visited) {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const nextX = x + dx[i];
    const nextY = y + dy[i];
    if (
      nextX >= 0 &&
      nextY >= 0 &&
      nextX < num &&
      nextY < num &&
      !visited[nextX][nextY] &&
      graph[nextX][nextY] > z
    ) {
      dfs(nextX, nextY, z, visited);
    }
  }
}

let maxSafeZones = 1; // 아무 지역도 잠기지 않을 경우 최소 1개 보장

for (let z = 0; z <= max; z++) {
  const visited = Array.from({ length: num }, () => Array(num).fill(false));
  let section = 0;

  for (let x = 0; x < num; x++) {
    for (let y = 0; y < num; y++) {
      if (!visited[x][y] && graph[x][y] > z) {
        dfs(x, y, z, visited);
        section++;
      }
    }
  }

  maxSafeZones = Math.max(maxSafeZones, section);
}

console.log(maxSafeZones);
