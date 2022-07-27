function diagnol(root) {
  const stack = [],
    queue = [root];
  let queue_count = 0;
  while (queue_count < queue.length) {
    let top = queue[queue_count];
    while (top) {
      if (top.left) {
        queue.push(top.left);
      }
      stack.push(top.left);
      top = top.right;
    }
    queue_count++;
  }
  return stack;
}
