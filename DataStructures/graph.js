// using an adjacency list for undirected graphs
class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    // error handling
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    // error handling
    if (!(this.adjacencyList[vertex1].includes(vertex2))) {
      this.adjacencyList[vertex1].push(vertex2);
    }
    
    if (!(this.adjacencyList[vertex2].includes(vertex1))) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    // no error handling

    // remove vertex2 from vertex1's array
    let removedV2 = this.adjacencyList[vertex1].filter(el => el !== vertex2);
    this.adjacencyList[vertex1] = removedV2;

    let removedV1 = this.adjacencyList[vertex2].filter(el => el !== vertex1);
    this.adjacencyList[vertex2] = removedV1;
  }

  removeVertex(vertex) {
    for (let connection of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, connection)
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start) {
    // no error handling
    let visited = {};
    let results = [];
    // helper function won't recognize this
    let adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      // base case
      if (!vertex) return;

      // recursion
      visited[vertex] = true;
      results.push(vertex);
      for (let neighbor of adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      }
    })(start);
    
    return results;
  }

  depthFirstIterative(start) {
    let visited = {};
    let results = [];
    let stack = [start];

    let currVertex;
    while (stack.length) {
      currVertex = stack.pop();
      visited[currVertex] = true;
      results.push(currVertex);

      this.adjacencyList[currVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      })
    }

    return results;
  }

  breadthFirst(start) {
    let visited = {};
    let results = [];
    let queue = [start];

    let currVertex;
    while (queue.length) {
      currVertex = queue.shift();
      visited[currVertex] = true;
      results.push(currVertex);

      this.adjacencyList[currVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          queue.push(neighbor);
        }
      })
    }

    return results;
  }
}

let graph = new Graph;
graph.addVertex("first");
graph.addVertex("second");
graph.addVertex("third");
// console.log(graph);

graph.addEdge("first", "third");
graph.addEdge("first", "second");
graph.addEdge("second", "first");
console.log(graph);
// {
//   first: [ 'third', 'second' ],
//   second: [ 'first' ],
//   third: [ 'first' ]
// }

// graph.removeEdge("first", "third");
// console.log(graph);
// {
//   first: [ 'second' ],
//   second: [ 'first' ],
//   third: []
// }

// graph.removeVertex("second");
// console.log(graph);
// {
//   first: [ 'third' ],
//   third: [ 'first' ]
// }

console.log(graph.depthFirstRecursive("first")); // ["first", "third", "second"]
console.log(graph.depthFirstIterative("first")); // ["first", "second", "third"]
console.log(graph.breadthFirst("first")); // ["first", "third", "second"]