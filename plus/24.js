function comb(arr, num) {
  let ans = [];
  const helper = (cur, rem) => {
    if (cur.length === num) {
      return ans.push(cur);
    }

    for (let i = 0; i < rem.length; i++) {
      let newCur = [...cur, rem[i]];
      let newRem = rem.slice(i + 1);
      helper(newCur, newRem);
    }
  };
  helper([], arr);
  return ans;
}

function permutation(arr, num) {
  let ans = [];
  const helper = (cur, rem) => {
    if (cur.length === num) {
      ans.push(cur);
      return;
    }

    for (let i = 0; i < rem.length; i++) {
      let newCur = [...cur, rem[i]];
      let newRem = rem.slice(0, i).concat(rem.slice(i + 1));
      helper(newCur, newRem);
    }
  };
  helper([], arr);
  return ans;
}

console.log(comb([1, 2, 3, 4], 2));

console.log(permutation([1, 2, 3, 4], 4));
