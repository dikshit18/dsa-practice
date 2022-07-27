function binaryTree(root, prev, head, flag) {
  if (!root) return null;
  this.binaryTree(root.left, prev, null);
  if (!flag) {
    prev = root;
    head = root;
    flag = 1;
  } else {
    prev.right = root;
    prev.right.left = prev;
    prev = prev.right;
  }
  console.log(root.data);
  this.binaryTree(root.right);
}
function solve(root) {
  this.binaryTree(root, null, next, 0);
}
