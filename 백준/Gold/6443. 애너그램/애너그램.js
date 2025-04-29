const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./plus/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);

function solution(str) {
  const answer = [];
  const num = str.length;
  const visited = Array(num).fill(false);
  str.sort();

  const backtrack = (item) => {
    if (item.length === num) {
      answer.push(item.join(""));
      return;
    }

    for (let i = 0; i < num; i++) {
      if (visited[i]) continue;
      if (i > 0 && str[i] === str[i - 1] && !visited[i - 1]) continue;
      visited[i] = true;
      item.push(str[i]);
      backtrack(item);
      item.pop();
      visited[i] = false;
    }
  };

  backtrack([]);

  const final = Array.from(answer);

  console.log(
    final
      .sort((a, b) => {
        for (let i = 0; i < a.length; i++) {
          if (a[i] > b[i]) {
            return 1;
          } else if (a[i] < b[i]) {
            return -1;
          }
        }
      })
      .join("\n")
  );
}

for (let i = 1; i <= n; i++) {
  const arr = input[i].trim("").split("");
  solution(arr);
}
