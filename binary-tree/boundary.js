const { BuildTree } = require("./tree-util");
function leftTraversal(root, answer) {
  if (!root || (!root.left && !root.right)) return null;
  answer.push(root.data);
  if (root.left) leftTraversal(root.left, answer);
  else leftTraversal(root.right, answer);
  return answer;
}
function rightTraversal(root, answer) {
  if (!root || (!root.left && !root.right)) {
    return null;
  }
  if (root.right) {
    rightTraversal(root.right);
  } else rightTraversal(root.left);
  answer.push(root.data);
  return answer;
}
function leafTraversal(root, answer) {
  if (!root) {
    return null;
  }
  if (!root.right && !root.left) {
    answer.push(root.data);
    return answer;
  }
  leafTraversal(root.left, answer);
  leafTraversal(root.right, answer);
}

function boundary(root) {
  const answer = [];
  answer.push(root.data);

  leftTraversal(root, answer);

  leafTraversal(root.left, answer);
  leafTraversal(root.right, answer);

  rightTraversal(root.right, answer);
  return answer;
}
