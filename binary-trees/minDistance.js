function lca(root, a, b) {
  if (!root) return null;
  if (root.data === a || root.data === b) return root;
  const left = this.lca(root.left, a, b);
  const right = this.lca(root.right, a, b);
  if (!left) return right;
  if (!right) return left;
  return root;
}
function solve(root, val) {
  if (!root) return 0;
  if (root.data === val) return 1;
  const a = this.solve(root.left, val);
  const b = this.solve(root.right, val);
  if (!a && !b) return 0;
  return a + b + 1;
}
function minDistance(root, a, b) {
  const lca = this.lca(root, a, b);
  const left = this.solve(root, lca);
  const right = this.solve(root, lca);
  return left + right - 2;
}
