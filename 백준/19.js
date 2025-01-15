function solution(string, query) {
  let obj = new Map();

  let ans = [];
  for (let i of string) {
    if (!obj.has(i)) {
      obj[i] = 1;
    }
  }

  for (let i of query) {
    if (obj.has(i)) {
      ans.push(true);
    } else {
      ans.push(false);
    }
  }

  return ans;
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
);
