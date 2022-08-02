let max = 0;
function solve(root) {
  if (!root) {
    return {
      min: Number,
      max: Number.MAX_SAFE_INTEGER,
      size: 1,
      isBST: true,
    };
  }
  const left = this.solve(root.left);
  const right = this.solve(root.right);

  let currNode = {
    size: left.size + right.size + 1,
    min: Math.min(root.data, left.min),
    max: Math.max(root.data, right.data),
  };
  if (
    right.isBST &&
    left.isBST &&
    root.data > left.max &&
    root.data < right.min
  ) {
    currNode.isBST = true;
  } else currNode.isBST = false;
  if (currNode.isBST) {
    this.answer = Math.max(this.answer, currNode.size);
  }
  return currNode;
}
function largestBST(root) {
  this.solve(root);
  return this.ans;
}
