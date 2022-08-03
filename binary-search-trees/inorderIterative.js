let stack = [];
function inOrderIterative(root) {
  let inorder = [],
    stack = [],
    current = root;
  while (true) {
    if (current.left) {
      stack.push(current.data);
      current = current.left;
    } else {
      if (!stack.length) {
        break;
      }
      current = stack.pop();
      inorder.push(current.data);
      current = current.right;
    }
  }
  return inorder;
}
function preOrderIterative(root) {
  let preOrder = [],
    current = root,
    stack = [];
  while (true) {
    if (current.left) {
      preOrder.push(current.data);
      stack.push(current.data);
      stack = stack.left;
    } else {
      if (!stack.length) {
        break;
      } else {
        current = stack.pop();
        current = current.right;
      }
    }
  }
}
