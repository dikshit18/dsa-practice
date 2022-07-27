function levelOrder(root) {
  const queue = [root],
    stack = [];
  let queue_count = 0;
  while (queue_count < queue.length) {
    const top = queue[queue_count];
    stack.push(top.data);
    if (top.left) queue.push(top.left);
    if (top.right) queue.push(top.right);
    queue_count++;
  }
  return stack;
}
