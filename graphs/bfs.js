class Solution {
  // Function to return Breadth First Traversal of given graph.
  constructor() {
    this.answer = [];
    this.visited = new Map();
  }

  bfs(node, adj) {
    const queue = [node];
    let queue_count = 0;
    this.visited.set(node, 1);
    while (queue_count < queue.length) {
      const front = queue[queue_count];
      this.answer.push(front);
      //traverse all neighbours now
      for (const item of adj.get(front)) {
        if (!this.visited.has(item)) {
          queue.push(item);
          this.visited.set(item, 1);
        }
      }
      queue_front++;
    }
  }
  bfsOfGraph(V, adj) {
    // code here
    for (let i = 0; i < V; i++) {
      if (this.visited.has(i)) {
        this.bfs(i, adj);
      }
    }
    console.log(this.answer);
    return this.answer;
  }
}
