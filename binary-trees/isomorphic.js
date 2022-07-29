function solve(root1, root2) {
  if (!root1 && root2) return true;
  if (!root1 || !root2) return false;
  if (root1.data !== root2.data) return false;
  return this;
}
function isomorphic(root1, root2) {
  this.solve(root1, root2);
}
