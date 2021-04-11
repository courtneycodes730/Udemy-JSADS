class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val)
    if (!this.size) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let temp = this.top
      this.top = newNode;
      this.top.next = temp;
    }

    return ++this.size;
  }

  pop() {
    if (!this.size) return null;
    
    let removedNode = this.top;
    this.top = removedNode.next;
    this.size--;
    
    if (!this.size) this.bottom = null;

    return removedNode.val;
  }
}

let stack = new Stack();
console.log(stack.push(0));
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack);

console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // 0
console.log(stack.pop()); // null
console.log(stack);