function isomorphic(root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  if (root1.data !== root2.data) return false;
  const a =
    this.isomorphic(root1.left, root2.left) &&
    this.isomorphic(root1.right, root2.right);
  const b =
    this.isomorphic(root1.left, root2.right) &&
    this.isomorphic(root1.right, root2.left);
  return a || b;
}
