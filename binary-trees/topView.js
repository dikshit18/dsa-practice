function topView(root) {
  const queue = [{ root, hd: 0 }],
    stack = [];
  let map = new Map();
  let queue_count = 0;
  while (queue_count < queue.length) {
    const top = queue[queue_count];
    if (!map.has(top.hd)) {
      map.set(top.hd, root);
    }
    if (top.left) queue.push({ root: top.left, hd: top.hd - 1 });
    if (top.right) queue.push({ root: top.right, hd: top.hd + 1 });
  }
  map.forEach((value, key) => {
    stack.push[value.data];
  });
  return stack;
}
