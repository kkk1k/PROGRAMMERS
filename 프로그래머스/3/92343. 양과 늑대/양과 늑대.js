function solution(info, edges) {
  let answer = 0;
  const n = info.length;
  
  // 트리(인접 리스트) 구성
  const tree = Array.from({ length: n }, () => []);
  for (let [parent, child] of edges) {
    tree[parent].push(child);
  }
  
  // 큐에 넣을 상태는 [현재 양의 수, 현재 늑대의 수, 후보 노드 목록]입니다.
  // 후보 노드 목록은 배열로 관리할 수 있습니다.
  let queue = [];
  // 초기 상태: 루트 노드(0번)는 항상 양이 있으므로, 양 1, 늑대 0,
  // 후보 목록에는 0번 노드의 자식들이 포함됩니다.
  queue.push([1, 0, tree[0]]);
  
  while (queue.length) {
    const [sheep, wolf, candidates] = queue.shift();
    
    // 방문한 상태에서 최대 양 갱신
    answer = Math.max(answer, sheep);
    
    // 후보 목록에 있는 노드들 중 하나씩 선택하며 BFS 전개
    for (let i = 0; i < candidates.length; i++) {
      const next = candidates[i];
      
      // 현재 후보 목록에서 선택한 노드를 제거한 후 남은 후보 목록을 복사
      let nextCandidates = candidates.slice(); 
      nextCandidates.splice(i, 1); // next 노드는 방문하므로 제거
      
      // 선택한 노드의 자식들을 후보 목록에 추가 (있다면)
      if (tree[next].length > 0) {
        nextCandidates = nextCandidates.concat(tree[next]);
      }
      
      if (info[next] === 0) { 
        // 해당 노드에 양이 있는 경우
        queue.push([sheep + 1, wolf, nextCandidates]);
      } else { 
        // 해당 노드에 늑대가 있는 경우
        // 늑대의 수를 증가시킨 후, 양의 수보다 늑대의 수가 절대 많아지면 안 됨.
        if (sheep > wolf + 1) {
          queue.push([sheep, wolf + 1, nextCandidates]);
        }
      }
    }
  }
  
  return answer;
}
