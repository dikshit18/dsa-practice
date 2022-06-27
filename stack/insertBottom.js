function insertBottom(stack, element) {
  solve(stack, element);
}
function solve(stack, element) {
  //basecase
  if (stack.length === 0) {
    stack.push(element);
    return;
  }
  const num = stack.pop();

  solve(stack, element);
  stack.push(num);
}
