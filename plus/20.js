function solution(part, number, comp) {
  let hash = new Map();
  let answer = 0;
  const check = (a, b) => {
    if (a.size !== b.size) return false;
    for (let [key, val] of a) {
      if (b.get(key) !== val) return false;
    }
    return true;
  };
  for (let i = 0; i < part.length; i++) {
    hash.set(part[i], number[i]);
  }

  for (let i = 0; i < comp.length - 9; i++) {
    let newComp = new Map();

    for (let j = i; j < i + 10; j++) {
      if (newComp.has(comp[j])) {
        // 여기서 수정: 값을 직접 할당하지 않고, set을 사용합니다.
        newComp.set(comp[j], newComp.get(comp[j]) + 1);
      } else {
        newComp.set(comp[j], 1);
      }
    }
    if (check(hash, newComp)) {
      answer += 1;
    }
  }

  return answer;
}

const part1 = ["banana", "apple", "rice", "pork", "pot"];
const number1 = [3, 2, 2, 2, 1];
const comp1 = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pot",
  "banana",
  "apple",
  "rice",
  "pork",
  "banana",
];
// 이 경우, 연속 10일 중 조건을 만족하는 경우의 수는 3
console.log(solution(part1, number1, comp1)); // 출력: 3
