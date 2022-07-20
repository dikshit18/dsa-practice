const { BuildTree } = require("./tree-util");
function zigzag(root) {
  const queue = [root],
    stack = [];
  let queue_count = 0;
  let leftToRight = false;
  while (queue_count < queue.length) {
    const top = queue[queue_count];
    stack.push(top.data);
    if (!leftToRight) {
      queue.push(top.right);
      queue.push(top.left);
    } else {
      queue.push(top.left);
      queue.push(top.right);
    }
    leftToRight = !leftToRight;
    queue_count++;
    console.log(stack);
  }
  console.log(stack);
  return stack;
}
function main() {
  const tree = BuildTree(null);
  zigzag(tree);
}
main();
