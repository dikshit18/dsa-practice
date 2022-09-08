class gfg {
  constructor() {
    this.visited = new Map();
    this.stack = [];
  }

  calcTopoSort(node, adj) {
    this.visited.set(node.toString(), 1);
    for (const neighbour of adj[node]) {
      if (!this.visited.has(neighbour.toString())) {
        this.calcTopoSort(neighbour, adj);
      }
    }
    this.stack.push(node);
  }
  //Function to return list containing vertices in Topological order.
  topoSort(V, adj) {
    // code here
    for (let i = 0; i < V; i++) {
      if (!this.visited.has(i.toString())) {
        this.calcTopoSort(i, adj);
      }
    }
    const returnStack = [];
    while (this.stack.length) {
      returnStack.push(this.stack.pop());
    }
    return returnStack;
  }
}
function main(V, edges) {}
