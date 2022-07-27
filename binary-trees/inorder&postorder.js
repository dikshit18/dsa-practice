function findPos(inorder, element) {
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === element) return i;
  }
  return -1;
}
function solve(inorder, postorder, index, inorderStart, inorderEnd, n) {
  if (this.postorder >= n || inorderStart >= inorderEnd) return null;
  const element = postorder[n - 1];
  const inorderIndex = this.findPos(inorder, element);
  const root = new Node(element);
  root.left = this.solve(inorder, postorder);
}
function main(inorder, postorder, n) {}
