// Dijkstra will use PRIORITY QUEUE
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

// Dijkstra uses a weighted graph
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({vertex: v2, weight});
    this.adjacencyList[v2].push({vertex: v1, weight});
  }

  // ***DIJKSTRA'S ALGORITHM*** //
  Dijkstra(start, end) {
    const distances = {};
    const previous = {};
    let visited = [];
    let priorityQ = new PriorityQueue();
    let path = []
    let smallest;
    
    // initialize state
    for (let vertex of Object.keys(this.adjacencyList)) {
      if (vertex === start) {
        distances[vertex] = 0;
        priorityQ.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        priorityQ.enqueue(vertex, Infinity);
      }
  
      previous[vertex] = null;
    };
  
    while (priorityQ.values.length) {
      smallest = priorityQ.dequeue().val;
  
      if (smallest === end) {
        // WE ARE DONE
        // BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        // iterate over neighbors of smallest
        for (let neighbor of this.adjacencyList[smallest]) {
          // calculate new distances
          let newDistance = distances[smallest] + neighbor.weight;
          let neighborVertex = neighbor.vertex;
          if (newDistance < distances[neighborVertex]) {
            // update new smallest distance to neighbor
            distances[neighborVertex] = newDistance;
            //update previous - how we got to neighborVertex
            previous[neighborVertex] = smallest;
            // enqueue in priorityQ with new priority
            priorityQ.enqueue(neighborVertex, newDistance)
          }
        }
      } 
    }
    
    return path.concat(start).reverse();
  }
  
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
// console.log(graph);

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);
// console.log(graph);

console.log(graph.Dijkstra("A", "E")); // [A, C, D, F, E]
console.log(graph.Dijkstra("A", "F")); // [A, C, D, F]