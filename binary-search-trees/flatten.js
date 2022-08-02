let prev;
function solve(root) {
  this.solve(root.left);
  prev.right = root;
  prev.left = null;
  prev = root;
  this.solve(root.right);
}
function flatten(root) {
  const node = new Node(-1);
  prev = node;
  this.solve(root);
}
