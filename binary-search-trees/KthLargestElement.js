function solve(root, k) {
  if (!root) {
    return null;
  }
  const left = this.solve(root.left, k);
  if (left) return left;
  this.i++;
  if (this.i === k) return root.data;
  return this.solve(root.right, k);
}
function KthLargestElement(root, k) {
  return solve(root, k);
}
