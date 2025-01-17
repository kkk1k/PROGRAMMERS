function solution(nodes) {
  // 노드 클래스 정의 (간단하게만 사용)
  class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  // 배열(nodes)을 받아서 인덱스 i에 해당하는 노드를 생성하는 재귀 함수
  function buildTree(i = 0) {
    if (i >= nodes.length || nodes[i] === null) return null;
    const node = new Node(nodes[i]);
    node.left = buildTree(2 * i + 1);
    node.right = buildTree(2 * i + 2);
    return node;
  }

  const root = buildTree();
  console.log(root);

  // 전위 순회: 현재 노드 -> 왼쪽 -> 오른쪽
  function preOrder(root, arr = []) {
    if (!root) return arr;
    arr.push(root.val);
    preOrder(root.left, arr);
    preOrder(root.right, arr);
    return arr;
  }

  // 중위 순회: 왼쪽 -> 현재 노드 -> 오른쪽
  function inOrder(root, arr = []) {
    if (!root) return arr;
    inOrder(root.left, arr);
    arr.push(root.val);
    inOrder(root.right, arr);
    return arr;
  }

  // 후위 순회: 왼쪽 -> 오른쪽 -> 현재 노드
  function postOrder(root, arr = []) {
    if (!root) return arr;
    postOrder(root.left, arr);
    postOrder(root.right, arr);
    arr.push(root.val);
    return arr;
  }

  return {
    preOrder: preOrder(root).join(" "),
    inOrder: inOrder(root).join(" "),
    postOrder: postOrder(root).join(" "),
  };
}

// 예제 실행
const nodes = [1, 2, 3, 4, 5, 6, 7];
/*
   주어진 배열은 아래와 같이 구성된 트리를 의미합니다.
   
           1
         /   \
        2     3
       / \   / \
      4   5 6   7
*/
const result = solution(nodes);
console.log(result);
console.log("Pre-order:", result.preOrder); // "1 2 4 5 3 6 7"
console.log("In-order:", result.inOrder); // "4 2 5 1 6 3 7"
console.log("Post-order:", result.postOrder); // "4 5 2 6 7 3 1"
