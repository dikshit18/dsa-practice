const { BuildTree } = require("./tree-util");
function inorderTraversal(root, head, prev, flag) {
  if (!root) return null;
  inorderTraversal(root.left);
  if (flag === 0) {
    head = root;
    prev = root;
    flag = 1;
  } else {
    prev.right = root;
    prev.right.left = prev;
    prev = prev.right;
  }
  inorderTraversal(root.right, head, prev, flag);
}
function treeToDll(root) {
  let head, prev;
  let flag = 0;
  inorderTraversal(root, head, prev, flag);
  return head;
}
