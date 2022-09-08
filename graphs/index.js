const adj = [
  [1, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];
const V = 3;
const adjList = new Array(V);

for (let i = 0; i < V; i++) {
  for (let j = 0; j < V; j++) {
    if (adj[i][j] == 1 && i != j) {
      if (adjList[i] && adjList[j]) {
        adjList[i].push(j);
        adjList[j].push(i);
      } else {
        adjList[j] = [i];
        adjList[i] = [j];
      }
    }
  }
}

console.log(adjList);
