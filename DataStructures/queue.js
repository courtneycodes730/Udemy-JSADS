class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);

    if (!this.size) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    
    return ++this.size;
  }

  dequeue() {
    if (!this.size) return null;

    let removedNode = this.first;
    this.first = removedNode.next;
    this.size--;

    if (!this.size) this.last = null;

    return removedNode.val;
  }
}

let q = new Queue();
q.enqueue("first");
q.enqueue("second");
q.enqueue("third");
console.log(q);

console.log(q.dequeue()); // first
console.log(q.dequeue()); // second
console.log(q.dequeue()); // third
console.log(q.dequeue()); // null
console.log(q);