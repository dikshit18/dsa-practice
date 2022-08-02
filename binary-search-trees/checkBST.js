// let flag = true;
// function checkBST(root) {
//   if (!root) return null;
//   if (!flag) return 0;
//   if (!root.left && root.right) return root;
//   const left = this.checkBST(root.left);
//   const right = this.checkBST(root.right);
//   if (left.data > root.data) this.flag = false;
//   if (right.data < root.data) this.flag = false;
//   return root;
// }
function solve(root, min, max) {
  if (!root) return true;
  const left = this.solve(root.left, min, root.data);
  const right = this.solve(root.left, root.data, max);
  return;
}
function isBST(root) {
  this.solve(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
