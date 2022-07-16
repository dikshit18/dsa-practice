const readlineSync = require("readline-sync");
class Node {
  constructor(data) {
    this.data = data;
    this.right = this.left = null;
  }
}
function BuildTree(root) {
  let data = readlineSync.question("Enter the data:");
  root = new Node(Number(data));

  if (Number(data) === -1) {
    return null;
  }
  readlineSync.question(`Enter the left side of ${data}`);
  root.left = BuildTree(root.left);
  readlineSync.question(`Enter the right side of ${data}`);
  root.right = BuildTree(root.right);
  return root;
}

function solve(root) {
  if (!root) return null;
  if (!root.left && !root.right) return root.data;
  const a = solve(root.left);
  const b = solve(root.right);
  if (a + b !== root.data) {
    return 0;
  }
  return a + b + root.data;
}

function checkSumTree(root) {
  solve(root);
}

function main() {
  const tree = BuildTree(null);
  console.log(tree);
  const res = topView(tree);
  console.log("Result is...", res);
}

main();
