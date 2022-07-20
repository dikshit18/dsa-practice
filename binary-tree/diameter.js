const { BuildTree } = require("./tree-util");
let ans = 0;
function diameter(root) {
  if (!root) return 0;
  const lh = diameter(root.left);
  const rh = diameter(root.right);
  ans = Math.max(ans, 1 + lh + rh);
  return 1 + Math.max(lh, rh);
}
function height(root) {
  if (!root) return null;
  return Math.max(height(root.left), height(root.right)) + 1;
}
function main() {
  const tree = BuildTree(null);
  console.log(tree);
  //   const res = topView(tree);
  //   console.log("Result is...", res);
}

main();
