function minElement(root) {
  if (!root) return null;
  if (root.left) {
    this.solve(root.left);
  } else {
    return root.data;
  }
  return root.d;
}
