const readlineSync = require("readline-sync");
class Node {
  constructor(data) {
    this.left = this.right = null;
    this.data = data;
  }
}
function BuildTree(root) {
  let data = readlineSync.question("Enter the data:");
  if (Number(data) === -1) return;

  root = new Node(data);
  readlineSync.question(`Enter the left side of ${data}`);
  root.left = BuildTree(root.left);
  readlineSync.question(`Enter the right side of ${data}`);
  root.right = BuildTree(root.right);
  return root;
}
function main() {
  const tree = BuildTree(null);
  console.log(tree);
}

module.exports = { BuildTree };
