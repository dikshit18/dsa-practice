function reverseStack(stack) {
  // base case
  if (!stack.length) {
    return;
  }
  const top = stack.pop();
  reverseStack(stack);
  stack.push(top);
}
