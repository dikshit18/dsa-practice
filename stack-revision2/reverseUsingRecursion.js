function reverse(stack) {
  if (stack.length > 0) {
    const elem = stack[stack.length - 1];
    reverse(elem);
    stack.push(elem);
    //return stack;
  }
  return stack;
}
console.log(reverse([1, 2, 3, 4]));
