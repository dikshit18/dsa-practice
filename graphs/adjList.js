class Graph {
  constructor() {
    this.map = new Map();
  }
  addEdge(u, v, direction) {
    //direction == 0,undirected graph
    //direction == 1, directed graph
    //create an edge from u-v

    if (this.map.has(u)) {
      const value = this.map.get(u);
      value.push(v);
      this.map.set(u, value);
    } else {
      this.map.set(u, [v]);
    }
    if (!direction) {
      if (this.map.has(v)) {
        const value = this.map.get(v);
        value.push(u);
        this.map.set(v, value);
      } else {
        this.map.set(v, [u]);
      }
    }
  }

  printAdjList() {
    this.map.forEach((value, key) => {
      console.log(key, "=>");
      console.log(value);
    });
  }
}
const graph = new Graph();
graph.addEdge(0, 1, 0);
graph.addEdge(1, 2, 0);
graph.addEdge(2, 0, 0);
graph.printAdjList();
