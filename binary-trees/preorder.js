//Recursive
function preorder(root) {
  if (!root) return null;
  preorder(root.left);
  preorder(root.right);
  response.push(root);
}
let response = [];

//Iterative
function preorder(root) {
  const queue = [root],
    stack = [];
  let queue_count = 0;
  while (queue_count < queue.length) {
    const top = queue[queue_count];
    stack.push(top.data);
  }
}
