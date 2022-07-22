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
function flat(root) {
  const response = inorder(root);
}
