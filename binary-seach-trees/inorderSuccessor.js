const { main } = require("./bst");
function inorder(root, response) {
  if (!root) return null;
  //if (root.left) {
  inorder(root.left, response);
  //}
  response.push(root.data);
  //if (root.right)
  inorder(root.right, response);
  return response;
}
function successor(root) {
  const response = [];
  const inorderRes = inorder(root, response);
  return inorderRes;
}
function mainFn() {
  const tree = main();
  const inorderRes = successor(tree);
  const response = [];
  for (let i = 1; i < inorderRes.length; i++) {
    response.push(inorderRes[i]);
  }
  response.push(-1);
  console.log(response);
}
mainFn();
