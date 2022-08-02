let prev = null;
function solve(root) {
  if (!root) return null;
  this.solve(root.left);
  if (prev) prev.next = root;
  prev = root;
  this.solve(root.right);
}
function inorderSucc(root) {}
