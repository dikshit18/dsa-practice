function solve(root) {
  if (!root) return 0;
  const left = this.solve(root.left);
  const right = this.solve(root.right);
  if (left[0] > right[0]) {
    return [left[0] + 1, left[1] + root.data];
  }
  if (right[0] < right[0]) {
    return [right[0] + 1, right[1] + root.data];
  } else {
    return [left[0] + 1, Math.max(left[0], right[0]) + root.data];
  }
}
function bloodline(root) {
  this.solve(root);
}
let max = Number.MIN_VALUE;
