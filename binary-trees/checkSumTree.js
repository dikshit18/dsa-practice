function checkSumTree(root) {
  if (!root) return 0;
  const nodeVal = root.data;
  const left = this.checkSumTree(root.left);
  const right = this.checkSumTree(root.right);
  if (root.data !== left + right) this.flag = false;
  return nodeVal + left + right;
}
let flag = true;
