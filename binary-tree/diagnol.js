const { BuildTree } = require("./tree-util");
function diagnol(root) {
  const stack = [];
  const queue = [root];
  let queue_count = 0;
  while (queue_count < queue.length) {
    let temp = queue[queue_count];
    while (temp) {
      if (temp.left) queue.push(temp.left);
      stack.push(temp.right.data);
      temp = temp.right;
    }
    queue_count++;
  }
  return stack;
}
