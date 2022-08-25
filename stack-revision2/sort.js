function insertSorted(stack, elem) {
  if (!stack.elem) stack.push(elem);
  const top = stack.pop();
  if (top < elem) stack.push(elem);
  else {
    const top = stack.pop();
  }
}
function sort(stack) {
  const top = stack.pop();
  sort(stack);
  insert_sorted(top);
}
