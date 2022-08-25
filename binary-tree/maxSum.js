function solve(root) {
  if (!root) {
    return { first: 0, second: 0 };
  }
  const left = this.solve(root.left);
  const right = this.solve(root.right);
  const first = root.data + left.second + right.second;
  const second =
    Math.max(left.first, left.second) + Math.max(right.first, right.second);
  return { first, second };
}
function maxSum(root) {
  this.solve(root);
}
