function solve(root, node) {
  if (!root) {
    return root;
  }
  if (root.data < node) {
    this.solve(root.right);
  } else if (root.data > node) this.solve(root.left);
  else {
    if (!root.left) {
      return root.right;
    } else if (!root.left) {
      return root.left;
    }
    root.data = this.min(root.right, node);
    this.solve(root.right, root.data);
  }
}
function minValue(root, node) {
  const minV = root.data;
  while (!root.left) {
    minV = root.left.data;
    root = root.left;
  }
  return minV;
}
function deleteNode(root, node) {
  this.solve(root, node);
}
