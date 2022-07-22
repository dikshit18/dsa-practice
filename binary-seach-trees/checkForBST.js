function isBST(root, min, max) {
  if (!root) return true;
  if (root.data >= min && root.data <= max) {
    const left = this.isBST(root.left, min, root.data);
    const right = this.isBST(root.right, root.data, max);
    return left && right;
  } else return false;
}
function main() {
  this.isBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
}
