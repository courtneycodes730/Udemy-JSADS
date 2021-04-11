class Node {
  constructor(val, priority) {
    this.val = val,
    this.priority = priority
  }
}

// will be created as a MinBinaryHeap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);

    // bubble up if values length > 1
    if (this.values.length > 1) {
      let currIdx = this.values.length - 1;

      while (currIdx > 0) {
        let parentNodeIdx = Math.floor((currIdx - 1) / 2);
        let parentNode = this.values[parentNodeIdx];

        if (priority >= parentNode.priority) break;

        let temp = parentNode;
        this.values[parentNodeIdx] = newNode;
        this.values[currIdx] = temp;
        currIdx = parentNodeIdx;
      }
    }
  }

  dequeue() {
    if (this.values.length === 1) return this.values.pop();

    const mostImportant = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    // sink down if new first element is less urgent (larger priority value)
    let parentIdx = 0;
    while (true) {
      let parent = this.values[parentIdx];
      let leftChildIdx = Math.floor((2 * parentIdx) + 1);
      let rightChildIdx = Math.floor((2 * parentIdx) + 2);
      let leftChild, rightChild;
      let swapIdx = null;
      
      if (leftChildIdx < this.values.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < parent.priority) {
          swapIdx = leftChildIdx;
        }
      }
      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapIdx === null && rightChild.priority < parent.priority) ||
          (swapIdx !== null && rightChild.priority < leftChild.priority)
        ) swapIdx = rightChildIdx;
      }
      if (!swapIdx) break;

      this.values[parentIdx] = this.values[swapIdx];
      this.values[swapIdx] = parent;
      parentIdx = swapIdx
    }

    return mostImportant;
  }
}

let queue = new PriorityQueue();
queue.enqueue("walk dog", 5)
console.log(queue); 
// [{val: walk dog, priority: 5}]

queue.enqueue("take out trash", 5)
console.log(queue); 
// [{val: walk dog, priority: 5}, {val: take out trash, priority: 5}]

queue.enqueue("eat", 3)
console.log(queue); 
// [
//   {val: eat, priority: 3}, 
//   {val: take out trash, priority: 5}, 
//   {val: walk dog, priority: 5}
// ]

queue.enqueue("go to doctor!", 1)
console.log(queue); 
// [ 
//   {val: go to doctor, priority: 1},
//   {val: eat, priority: 3}, 
//   {val: walk dog, priority: 5}, 
//   {val: take out trash, priority: 5}
// ]

// console.log(queue.dequeue()) // {val: go to doctor, priority: 1}
// console.log(queue); 
// [ 
//   {val: eat, priority: 3},
//   {val: take out trash, priority: 5}, 
//   {val: walk dog, priority: 5}
// ]