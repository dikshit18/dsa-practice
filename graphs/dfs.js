class DFS {
  constructor() {
    this.visited = new Map();
    this.adj = new Map();
  }
  dfs(adj, item) {}
  depthFirstSearch(V, edges) {
    //Prepare Adjancy List

    for (let i = 0; i < edges.length; i++) {
      const element = edges[i];
    }

    for (let i = 0; i < V.length; i++) {
      const element = V[i];
      if (this.visited.has(element)) {
        this.dfs(adj, item);
      }
    }
  }
}
