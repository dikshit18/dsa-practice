let sum = 0;
function solve(root) {
  if (!root) {
    return {
      first: 0,
      second: 0,
    };
  }
  let left = this.solve(root.left);
  let right = this.solve(root.right);

  const first = root.data + left.second + right.second;
  const second =
    Math.max(left.first, left.second) + Math.max(right.first, right.second);
  return { first, second };
}
function getMaxSum(root) {
  let ans = this.solve(root);
  return Math.max(ans.first, ans.second);
}
