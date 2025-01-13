const fs = require("fs");
const input = fs
  .readFileSync( "/dev/stdin")
  .toString()
  .trim();

const N = Number(input);

// 재귀적으로 패턴을 생성하는 함수
function star(n) {
  
  if (n === 1) {
    return ["*"];
  }

  const prev = star(n / 3)

  const pattern = []

  for (let i = 0; i < prev.length; i++){
    pattern.push(prev[i].repeat(3))
  }

   for (let i = 0; i < prev.length; i++) {
     pattern.push(prev[i] + " ".repeat(prev[i].length) + prev[i]);
   }

   for (let i = 0; i < prev.length; i++) {
     pattern.push(prev[i].repeat(3));
   }
  
  return pattern;
}

const result = star(N).join("\n");
console.log(result);
