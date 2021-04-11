class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode
    } else {
      let currNode = this.root;
      while (true) {
        if (val === currNode.val) return;

        if (val < currNode.val) {
          if (!currNode.left) {
            currNode.left = newNode;
            return this;
          }
          currNode = currNode.left;
        } else {
          if (!currNode.right) {
            currNode.right = newNode;
            return this;
          }
          currNode = currNode.right;
        }
      }
    }

    return this;
  }

  find(val) {
    let currNode = this.root;
    let found = false;

    while (currNode && !found) {
      if (val < currNode.val) {
        currNode = currNode.left;
      } else if (val > currNode.val) {
        currNode = currNode.right;
      } else {
        found = true;
      }
    }

    if (!found) return undefined;

    return currNode;
  }

  contains(val) {
    let currNode = this.root;
    let found = false;

    while (currNode && !found) {
      if (val < currNode.val) {
        currNode = currNode.left;
      } else if (val > currNode.val) {
        currNode = currNode.right;
      } else {
        found = true;
      }
    }

    return found;
  }

  // traverse level by level
  BFS() {
    if (!this.root) return;

    let queue = [this.root];
    let visited = [];
    let curr;

    while (queue.length) {
      curr = queue.shift();
      visited.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }

    return visited;
  }

  // visits parent, then left child, then right child
  // returns a copy of the tree
  DFSPreOrder() {
    if (!this.root) return;

    let visited = [];
    
    function traverse(node) {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }

  // visits left child, then right child, then parent
  DFSPostOrder() {
    if (!this.root) return;

    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    }

    traverse(this.root);

    return visited;
  }

  // visits left child, then parent, then right child
  // result is a sorted array
  DFSInOrder() {
    if (!this.root) return;

    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);

    return visited;
  }
}

let bst = new BST();
// bst.root = new Node(10);
// bst.root.right = new Node(15);
// bst.root.left = new Node(9);
// bst.root.right.left = new Node(11);

bst.insert(10);
bst.insert(15);
bst.insert(9);
bst.insert(11);
bst.insert(17);
bst.insert(2);
bst.insert(10);

// console.log(bst.find(2)); // Node {val: 2, left: null, right: null}
// console.log(bst.find(9)); // Node {val: 9, left: [Node], right: null}
// console.log(bst.find(22)); // undefined

// console.log(bst.contains(15)); // true
// console.log(bst.contains(22)); // false

// console.log(bst.BFS()); // [10, 9, 15, 2, 11, 17]
// console.log(bst.DFSPreOrder()); // [10, 9, 2, 15, 11, 17]
// console.log(bst.DFSPostOrder()); // [2, 9, 11, 17, 15, 10]
console.log(bst.DFSInOrder()); // [2, 9, 10, 11, 15, 17]