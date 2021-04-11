class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // update current tail to point to newNode
      this.tail.next = newNode;
      // update tail to now be newNode
      this.tail = newNode;
    }
    this.length++

    return this;
  }

  pop() {
    if (!this.length) return;

    let curr = this.head;
    let newTail = curr;

    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null
    }

    return curr;
  }

  shift() {
    if (!this.length) return;

    let removedHead = this.head;
    this.head = removedHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    return removedHead.val;
  }

  unshift(val) {
    let newHead = new Node(val);

    let oldHead = this.head;
    this.head = newHead;
    this.head.next = oldHead;
    if (!this.length) {
      this.tail = this.head;
    }
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) return;

    let foundNode = this.head;
    while (index) {
      foundNode = foundNode.next;
      index--;
    }

    return foundNode;
  }

  set(index, val) {
    let gotNode = this.get(index)
    if (gotNode) {
      gotNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);
    
    let prev = this.get(index - 1);
    let newNode = new Node(val);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;

    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop().val;
    
    let prev = this.get(index - 1);
    let removedNode = prev.next;
    prev.next = removedNode.next;

    this.length--;

    return removedNode.val;
  }

  reverse() {
    let end = this.length;

    let curr = this.head;
    this.head = this.tail;
    this.tail = curr;

    let prev = null;
    let next;
    
    if (this.length === 2) return this;
    
    while (end) {
      // set next to be next node in original list
      next = curr.next;
      // set curr node's next to point to previous value in original list
      // on first run, we want curr node to point to null because it's the tail
      curr.next = prev;
      // moving pointers forward in original list
      // set prev to be curr node and set curr to be next
      prev = curr;
      curr = next;

      end--;
    }

    return this;
  }
}

// let list = new SinglyLinkedList()
// list.push("hello");
// list.push("there");
// list.push("!");
// console.log(list);

// list.pop();
// console.log("removed item:", list.pop());
// console.log("shifted the list and removed:", list.shift());
// console.log("shifted the list and removed:", list.shift());
// console.log("shifted the list and removed:", list.shift());
// console.log("shifted the list and removed:", list.shift());
// list.push("hey again");
// console.log(list)
// console.log("unshift the list");
// console.log(list.unshift("this is a new head now"))

// console.log(list.get(2));
// console.log(list.get(4));

// console.log(list.set(1, "here NOT there"));
// console.log(list.set(4, "here NOT there"));

// console.log(list.insert(0, "I'm at the beginning now"));
// console.log(list.insert(5, "yay I have been inserted"));
// console.log(list.insert(20, "not inserted"));
// console.log(list);

// console.log(list.remove(3)); // undefined
// console.log(list.remove(2)); // !
// console.log(list.push("new tail")); // length = 3
// console.log(list.push("new new tail")) // length = 4
// console.log(list.remove(0)); // hello
// console.log(list.unshift("newHead")); // length = 4
// console.log(list.remove(1)); // there

// console.log(list.reverse());