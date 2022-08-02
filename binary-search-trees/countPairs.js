function findElementinBST(root, K) {}
function solve(root1, root2, X) {
  if (!root1) return null;
  this.solve(root1.left);
  const elem = X - root1.data;
  const resp = findElementinBST(root2, elem);
  if (resp) {
    result.push([root1.data, resp]);
  }
  this / solve(root1.right, root2, X);
}
let result = [];
function countPairs(root1, root2, X) {
  this.solve(root1);
}
