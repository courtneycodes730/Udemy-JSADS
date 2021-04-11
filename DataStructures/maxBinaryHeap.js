class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    this.values.push(val);

    // bubble up - to move val to correct values array position
    if (this.values.length > 1) {
      let idx = this.values.length - 1;
      
      while (idx > 0) {
        let parentIdx = Math.floor((idx - 1)/2);
        let parent = this.values[parentIdx]; 

        if (parent >= val) break;

        let temp = parent;
        this.values[parentIdx] = val;
        this.values[idx] = temp;
        idx = parentIdx;
      }
    }
  }

  extractMax() {
    if (this.values.length === 1) return this.values.pop();

    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    
    // sink down - to move new root to its correct values array position
    let parentIdx = 0;
    while (true) {
      let parent = this.values[parentIdx];
      let leftChildIdx = Math.floor((2 * parentIdx) + 1);
      let rightChildIdx = Math.floor((2 * parentIdx) + 2);
      let leftChild, rightChild;
      let swapIdx = null;

      if (leftChildIdx < this.values.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > parent) swapIdx = leftChildIdx;
      }
      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapIdx === null && rightChild > parent) ||
          (swapIdx !== null && rightChild > leftChild)
        ) swapIdx = rightChildIdx;
      }
      if (swapIdx === null) break;

      this.values[parentIdx] = this.values[swapIdx];
      this.values[swapIdx] = parent;
      parentIdx = swapIdx;
    }
    
    return max;
  }
}

let maxHeap = new MaxBinaryHeap()
maxHeap.insert(49);
maxHeap.insert(33);
// console.log(maxHeap); // [49, 33]
maxHeap.insert(55);
// console.log(maxHeap); // [55, 33, 49]
maxHeap.insert(34);
// console.log(maxHeap); // [55, 34, 49, 33]
maxHeap.insert(52);
// console.log(maxHeap); // [55, 52, 49, 33, 34]

console.log(maxHeap.extractMax()); // 55
console.log(maxHeap); // [52, 34, 49, 33]
console.log(maxHeap.extractMax()); // 52
console.log(maxHeap); // [49, 34, 33]