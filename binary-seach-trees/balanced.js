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
  node.left = createTree(array, start, mid - 1);
  node.right = createTree(array, mid + 1, end);
  return node;
}
function balanced(root) {
  //Make inorder
  const response = this.inorder(root, []);

  //Make a tree from inordere
  return this.createTree(response, 0, response.length);
}
