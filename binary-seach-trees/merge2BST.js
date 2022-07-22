function inorder(root, response) {
  if (!root) return null;
  //if (root.left) {
  inorder(root.left, response);
  //}
  response.push(root);
  //if (root.right)
  inorder(root.right, response);
  return response;
}
function createTree(array, start, end) {
  if (start > end) return null;
  const mid = start + end / 2;
  const node = new Node(array(mid));
  node.left = this.createTree(array, start, mid - 1);
  node.right = this.createTree(array, mid + 1, end);
  return node;
}
function merge2BST(root1, root2) {
  const array1 = this.inorder(root1, []);
  const array2 = this.inorder(root2, []);
  const sortedArray = [...array1, ...array2].sort((a, b) => a - b);
  return this.createTree(sortedArray, 0, sortedArray.length);
}
