const readlineSync = require("readline-sync");
class Node {
  constructor(data) {
    this.data = data;
    this.right = this.left = this.hd = null;
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

module.exports = { BuildTree };
