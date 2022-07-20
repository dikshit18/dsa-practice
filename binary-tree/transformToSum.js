const { BuildTree } = require("./tree-util");
function transformToSum(root) {
  if (!root) return 0;
  const left = transformToSum(root.left);
  const right = transformToSum(root.right);
  root.data = left + right;
  return left + right + root.data;
}
