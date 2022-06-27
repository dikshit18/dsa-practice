function sortStack(stack) {
  return solve(stack);
}

function solve(stack) {
  //base case
  if (stack.length === 0) {
    return;
  }
  const top = stack.pop();

  solve(stack);

  pushInSortedWay(stack, top);

  stack.push(top);
}
function pushInSortedWay(stack, element) {
  //base case
  if (
    stack.length === 0 ||
    (!stack.length && stack[stack.length - 1] < element)
  ) {
    stack.push(element);
    return;
  }
  const n = stack.pop();
  pushInSortedWay(stack, element);
  stack.push(n);
}
