class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
      this.info = null
    }
}

function buildTree (nodes,nodeinfo) {
    let root = new Node(nodes[0])
    root.info = nodeinfo[nodes[0]-1]
    
    for(let i = 1 ; i< nodes.length ; i++) {
        const currentNode = new Node(nodes[i])
        currentNode.info = nodeinfo[nodes[i]-1]
        
        let currentParent = root
        while(true) {
            if(currentNode.info[0] < currentParent.info[0]) {
                if(currentParent.left === null) {
                    currentParent.left = currentNode
                    break
                } else {
                    currentParent= currentParent.left
                }
            } else {
                if(currentParent.right === null) {
                    currentParent.right = currentNode
                    break
                } else {
                    currentParent = currentParent.right
                }
            }
        }
    }
    
    return root
}

function preOrder (node,arr=[]) {
    if(node === null) return
    arr.push(node.val)
    preOrder(node.left,arr)
    preOrder(node.right,arr)
    return arr
}

function postOrder (node, arr=[]) {
    if(node === null) return
    postOrder(node.left,arr)
    postOrder(node.right, arr)
    arr.push(node.val)
    return arr
}

function solution(nodeinfo) {
    var answer = [];
    const nodes = Array.from({length:nodeinfo.length}, (_,idx)=> idx+1)
    nodes.sort((a,b)=> {
        if(nodeinfo[a-1][1]> nodeinfo[b-1][1]) {
            return -1
        } else if (nodeinfo[a-1][1] < nodeinfo[b-1][1]) {
            return 1
        } else {
            return nodeinfo[b-1][0] - nodeinfo[a-1][0] 
        }
    })
    
    const tree = buildTree(nodes, nodeinfo)
    const pre = preOrder(tree)
    const pos = postOrder(tree)
    answer.push(pre)
    answer.push(pos)
    
    
    return answer;
}