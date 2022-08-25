function topView(root) {
  const queue = [{ root, hd: 0 }],
    map = new Map();
  let queue_front = 0;
  while (queue_front < queue.length) {
    const top = queue[queue_front];
    const hd = top.hd;
    if (!map.has(hd)) {
      map.set(hd, top.root.data);
    }
    answer.push(top.root.data);
    queue_front++;
    queue.push({ root: top.root.left, hd: hd - 1 });
    queue.push({ root: top.root.right, hd: hd + 1 });
    queue_front++;
  }
}
