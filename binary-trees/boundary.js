function leftSide(root, answer) {
  if (!root || (!root.left && !root.right)) return null;
  answer.push(root.data);
  if (root.left) this.leftSide(root.left, answer);
  else this.leafSide(root.right, answer);
  return answer;
}
function rightSide(root, answer) {
  if (!root || (!root.left && !root.right)) return null;
  answer.push(root.data);
  if (root.right) this.rightSide(root.right, answer);
  else this.rightSide(root.left, answer);
  return answer;
}
function leafNode(root, answer) {
  if (!root) return null;
  if (!root.left && !root.right) {
    answer.push(root.data);
  }
  this.leafNode(root.left, answer);
  this.leafNode(root.right, answer);
  return answer;
}
function boundary(root) {
  const answer = [];
  leftSide(root.left, answer);
  leafNode(root.left, answer);
  leafNode(root.right, answer);
  rightSide(root.right, answer);
}
