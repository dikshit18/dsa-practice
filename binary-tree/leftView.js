const { BuildTree } = require("./tree-util");
function main() {
  const tree = BuildTree(null);
  leftViewUtil(root, new Map(), 0);
}
function leftViewUtil(root, list, level) {
  if (!root) return;
  if (!list.has(level)) {
    list.set(level, root);
  }
  leftViewUtil(root.left, list, level + 1);
  leftViewUtil(root.right, list, level + 1);
}
