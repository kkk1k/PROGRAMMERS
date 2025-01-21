const fs = require("fs");
const input = fs
  .readFileSync(
   "/dev/stdin" 
  )
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);

class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const nodes = {};

for (let i = 1; i <= num; i++) {
  const [curr, left, right] = input[i].trim().split(" ");
  if (!nodes[curr]) {
    nodes[curr] = new Node(curr);
  }
  if (left !== ".") {
    nodes[curr].left = left;
  }
  if (right !== ".") {
    nodes[curr].right = right;
  }
}

const root = nodes["A"];

function preOrder(node, arr = []) {
  if (!node) return;
  arr.push(node.val);
  preOrder(nodes[node.left], arr);
  preOrder(nodes[node.right], arr);
  return arr;
}

function postOrder(node, arr = []) {
  if (!node) return;
  postOrder(nodes[node.left], arr);
  postOrder(nodes[node.right], arr);
  arr.push(node.val);
  return arr;
}

function inOrder(node, arr = []) {
  if (!node) return;
  inOrder(nodes[node.left], arr);
  arr.push(node.val);
  inOrder(nodes[node.right], arr);
  return arr;
}

let pre = preOrder(root);
let post = postOrder(root);
let inord = inOrder(root);

console.log(pre.join(""));
console.log(inord.join(""));
console.log(post.join(""));
