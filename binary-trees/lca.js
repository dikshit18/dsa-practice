function solve(root, n1, n2) {
  if (!root) return null;
  if (root.data === n1 || root.data === n2) return root;

  const left = this.solve(root.left, n1, n2);
  const right = this.solve(root.right, n1, n2);

  if (!left) return right;
  if (!right) return left;
  return root;
}
function lca(root, n1, n2) {
  this.solve(root, n1, n2);
}
