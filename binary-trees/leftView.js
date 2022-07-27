// const { BuildTree } = require("./tree");
// let array = [];
// function solve(root) {
//   if (!root) return;
//   array.push(root.data);
//   if (root.left) solve(root.left);
//   else {
//     solve(root.right);
//   }
// }
// function leftView(root) {
//   solve(root);
// }
// function main() {
//   const tree = BuildTree(null);
//   solve(tree);
//   console.log(array);
// }
// main();

function leftView(root) {
  const map = new Map();
  leftViewUtil(root, map, 0);
}
function leftViewUtil(root, map, level) {
  if (!map.has(level)) {
    map.set(level, root);
  }
  this.leftViewUtil(root.left, map, level++);
  this.leftViewUtil(root.right, map, level++);
}
