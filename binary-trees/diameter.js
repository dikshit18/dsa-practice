function diameter(root) {
  if (!root) return;
  const left = this.height(root.left);
  const right = this.height(root.right);
  const max = Math.max(left, right);
  return Math.max(max, 1 + left + right);
}
function height(root) {
  if (!root) return 0;
  return 1 + Math.max(height(root.left), height(root.right));
}
function diameter(root) {
  if (!root) return 0;
  const left = this.diameter(root.left);
  const right = this.diameter(root.right);
}
