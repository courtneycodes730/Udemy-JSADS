class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.length) return;

    let removedTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedTail.prev;
      this.tail.next = null;
      removedTail.prev = null;
    }
    this.length--;
    
    return removedTail;
  }

  shift() {
    let removedHead = this.head;

    if (!this.length) return;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedHead.next;
      this.head.prev = null;
      removedHead.next = null;
    }
    this.length--;

    return removedHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return;

    let count, foundNode;
    if (index <= Math.floor((this.length - 1)/ 2)) {
      count = 0;
      foundNode = this.head;
      while (count !== index) {
        foundNode = foundNode.next;
        count++;
      }
    } else {
      count = this.length - 1;
      foundNode = this.tail;
      while (count !== index) {
        foundNode = foundNode.prev;
        count--;
      }
    }

    return foundNode;
  }

  set(index, val) {
    let gotNode = this.get(index);
    if (gotNode) {
      gotNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode, newNode.prev = beforeNode;
    newNode.next = afterNode, afterNode.prev = newNode;
    
    this.length++;
    
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop;

    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.prev = null, removedNode.next = null;

    this.length--;

    return removedNode;
  }

  reverse() {
    if (this.length <= 1) return this;
    let count = 0;

    let curr = this.tail;
    this.head = curr, this.head.prev = null;

    while (count < this.length) {
      // hold curr's previous -- will be new curr
      let temp = curr.prev;
      let newNext = temp;

      newNext.prev = curr;
      curr.next = newNext;
      curr = temp;

      count++;
    }

    this.tail = curr.next, this.tail.next = null;

    return this;
  }
}

let double = new DoublyLinkedList();
console.log(double.push(0));
double.push(1);
console.log(double.push(2));

// console.log("removed last item:", double.pop()); // 2
// console.log(double); // length = 2

// console.log("SHIFTED:", double.shift()); // 0
// console.log(double); // length = 2

// console.log(double.unshift(-1)); // length = 4, head = -1

// console.log(double.get(3)); // undefined
// console.log(double.get(1)); // 1
// console.log(double.get(2)); // 2

// console.log(double.set(2, "NEW END")); // true
// console.log(double.set(-1, "will I be updated?")); // false
// console.log(double);

// console.log(`inserted "?"?`,double.insert(-1, `?`)); // false
// console.log(`inserted "will I be inserted"?`, double.insert(5, "will I be inserted?")); // false
// console.log(`inserted "hello from 1"?`, double.insert(1, "hello from 1")); // true
// console.log(double); // length = 4
// console.log(`inserted "last"?`, double.insert(4, "last")); // true
// console.log(double); // length = 5

// console.log("REMOVED", double.remove(1)); // 1
// console.log(double); // length = 2

console.log("REVERSED", double.reverse());