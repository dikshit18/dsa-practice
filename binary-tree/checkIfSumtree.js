const { BuildTree } = require("./tree-util");
function binaryTree(root, flag) {
  if (!root) return null;
  const left = binaryTree(root.left);
  const right = binaryTree(root.right);
  if (left + right != root.data) flag = 0;
}
