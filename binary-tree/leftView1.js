function solve(root, map, level) {
  if (!root) return;
  if (!map.has(level)) {
    map.set(level, root);
  }
  this.solve(root.left, map, level + 1);
  this.solve(root.right, map, level + 1);
}
function leftView(root) {
  const map = new Map();
  return solve(root, map, 0);
}
