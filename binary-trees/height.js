const { BuildTree } = require("./tree");
function height(root) {
  if (!root) return;
  return 1 + Math.max(height(root.left), height(root.right));
}
function main(root) {
  const tree = BuildTree(root);
  console.log("Tree,", tree);
  console.log(height(tree));
}
main();
