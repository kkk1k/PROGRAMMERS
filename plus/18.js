function solution(arr, k) {
  let answer = false;
  let freq = {};
  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let i of arr) {
    let com = k - i;
    if (obj[com] === 1 && com !== i) {
      answer = true;
      break;
    }
    console.log(obj, answer);
  }
  return answer;
}

console.log(solution([2, 3, 5, 9], 6));
