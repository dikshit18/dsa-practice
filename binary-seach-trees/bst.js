const readlineSync = require("readline-sync");
class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}
function insertIntoBST(root, data) {
  if (!root) {
    const node = new Node(Number(data));
    return node;
  }
  if (data < Number(root.data)) {
    root.left = insertIntoBST(root.left, data);
  } else {
    root.right = insertIntoBST(root.right, data);
  }
  return root;
}
function levelOrderTraversal(root) {
  const queue = [root],
    stack = [];
  let queue_count = 0;
  while (queue_count < queue.length) {
    const top = queue[queue_count];
    console.log("top is", top);
    stack.push(top && top.data);
    if (top?.left) {
      queue.push(top?.left);
    }
    if (top?.right) {
      queue.push(top?.right);
    }
    queue_count++;
  }
  return stack;
}
function takeInput(root) {
  //const data = //readlineSync.question("Enter the data:");
  const data = "3 10 6 19 4 7 -1";
  const arr = data.split(" ");
  let i = 0;
  while (arr[i] != -1) {
    root = insertIntoBST(root, arr[i]);
    i++;
  }
  return root;
}
function main() {
  let root = null;
  root = takeInput(root);
  //const result = levelOrderTraversal(root);
  return root;
}
module.exports = { main };
