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
function levelOrderTraversal(root) {
  let queue = [root],
    res = [];
  let queue_count = 0;
  while (queue_count < queue.length) {
    const top = queue[queue_count];
    console.log("=>", queue[0].data);
    res.push(top?.data);
    if (top.left) {
      queue.push(top.left);
    }
    if (top.right) {
      queue.push(top.right);
    }
    queue_count++;
  }
  console.log(res);
}
function reverseLevelTraversal(root) {
  const stack = [root];
  let res = [];
  while (stack.length) {
    if (top.right) {
      stack.push(top.right);
    }
    if (top.left) {
      stack.push(top.left);
    }
    const top = stack.pop();
    res.push(top.data);
  }
  return res;
}
function inorderTraversal(root, response) {
  if (!root) return null;
  inorderTraversal(root.left, response);
  response.push(root.data);
  inorderTraversal(root.right, response);
  return response;
}
function main() {
  const tree = BuildTree(null);
  console.log(tree);
  const response = [];
  const res = inorderTraversal(tree, response);
  console.log("Result is...", res);
}

main();
