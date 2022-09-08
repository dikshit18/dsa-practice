class Solution {
  constructor() {
    this.adjList = {};
    this.answer;
    this.visited = new Map();
  }
  prepareAdjList(edges) {
    for (let i = 0; i < edges.length; i++) {
      const u = edges[i];
      const { first, second } = u;
      if (this.adjList[first]) this.adjList[first].push();
      else {
        this.adjList[first] = [second];
      }
      if (this.adjList[second]) this.adjList[second].push();
      else {
        this.adjList[second] = [first];
      }
    }
  }
  bfs(node) {
    const queue = [node];
    this.visited.set(node, true);
    while (queue.length) {
      const frontNode = queue.shift();
      this.answer.push(frontNode);

      for (const i of this.adjList[frontNode]) {
        if (!this.visited.get(i)) {
          queue.push(i);
          this.visited.set(i, true);
        }
      }
    }
  }

  calculateBfs(vertex) {
    for (let i = 0; i < vertex.length; i++) {
      if (!visted[i]) {
        this.bfs(i);
      }
    }
    return this.answer;
  }
}
