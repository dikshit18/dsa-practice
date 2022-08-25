const readlineSync = require("readline-sync");
let Array2D = (r, c) => [...Array(r)].map((_) => Array(c).fill(0));
function adjMatrix(n, m) {
  const matrix = Array2D(n, m);
  for (let i = 0; i < m; i++) {
    let u, v;
    let data = readlineSync.question("Enter U&V - ");
    const split = data.split(" ");
    u = split[0];
    v = split[1];
    matrix[u][v] = 1;
    matrix[v][u] = 1;
  }
  console.log(matrix);
  printAdjMatrix(matrix);
}
function printAdjMatrix(adjMatrix) {
  for (let i = 0; i < adjMatrix.length; i++) {
    for (let j = 0; j < adjMatrix.length; j++) {
      console.log(adjMatrix[i][j]);
    }
  }
}
console.log(adjMatrix(3, 3));
