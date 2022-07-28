function solve(root, max, height) {
  if (!root) return;
  if (!root.left && !root.right) {
    if (max === -1) {
      max = height;
    } else {
      if (max !== height) return 0;
    }
  }
  this.solve(root, max, height + 1);
  this.solve(root, max, height + 1);
}
function leafSameLevel(root) {
  const max = -1;
  this.solve(root, max, 0);
}
