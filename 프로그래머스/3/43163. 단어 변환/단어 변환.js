function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  const graph = {};
  const visited = {};
  const len = begin.length;

  for (let item of words) {
    graph[item] = [];
    visited[item] = false;
    for (let ano of words) {
      let similiar = 0;
      if (item === ano) continue;
      for (let i = 0; i < len; i++) {
        if (item[i] === ano[i]) {
          similiar += 1;
        }
      }
      if (similiar === len - 1) {
        graph[item].push(ano);
      }
    }
  }
  graph[begin] = [];
  visited[begin] = false;
  for (let word of words) {
    let similar = 0;
    for (let i = 0; i < len; i++) {
      if (begin[i] === word[i]) {
        similar += 1;
      }
    }
    if (similar === len - 1) {
      graph[begin].push(word);
    }
  }

  function bfs(start) {
    let answer = 0;
    const queue = [[start, answer]];
    visited[start] = true;

    while (queue.length > 0) {
      const [item, d] = queue.shift();
      if (item === target) {
        return d;
        break;
      }
      for (let i of graph[item]) {
        if (!visited[i]) {
          visited[i] = true;
          queue.push([i,d+1]);
        }
      }
      
    }
        return 0
  }

  let ans = bfs(begin);
  return ans;
}
