function solve(root, val) {
  if (!root) return null;
  let response;
  if (
    root.data === val ||
    (response = this.solve(root.left, val)) ||
    (response = this.solve(root.right, val))
  ) {
    if (this.k === 0) {
      return null;
    }
    this.k--;
    return root;
  }
}
function KthAncestor(root) {
  const resp = this.solve(root);
  if (resp) return -1;
}
