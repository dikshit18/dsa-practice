function findPos(inorder, elem) {
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === elem) return i;
  }
  return -1;
}
function buildTree(inorder, preorder, index, inorderStart, inorderEnd, n) {
  if (index >= n || inorderStart > inorderEnd) return null;
  const elem = preorder[index];
  const node = new Node(elem);
  let position = findPos(inorder, elem);
  node.left = this.buildTree(
    inorder,
    preorder,
    index,
    inorderStart,
    position + 1,
    n
  );
  node.right = this.buildTree(
    inorder,
    preorder,
    index,
    position + 1,
    inorderEnd,
    n
  );
  return node;
}
function sumTree(inorder, preorder, n) {
  this.buildTree(inorder, preorder, preOrderIndex, inorderStart, inorderEnd, n);
}
