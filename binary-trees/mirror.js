function mirror(root) {
  if (!root) return;
  const temp = root.right;
  root.right = root.left;
  root.left = temp;
  root = mirror(root.left);
  root = mirror(root.right);
  return root;
}
