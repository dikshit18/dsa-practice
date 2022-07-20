const { BuildTree } = require("./tree-util");
function topView() {}
function main(root) {
  const queue = [root];
  let queue_count = 0;
  const map = new Map();
  while (queue_count < queue.length) {
    const top = queue[queue_count];
    if (!map.has(top.hd)) {
      map.set(top.hd, top.data);
    }
    if (top.left) {
      queue.push();
    }
    if (top.right) {
    }
  }
}
