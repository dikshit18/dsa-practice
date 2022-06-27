class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }
  push(element) {
    this.items.push(element);
    top++;
  }
  pop() {
    this.items.pop();
    top--;
  }
  peek() {
    this.items[top + 1];
  }
  isEmpty() {
    return top < 0 ? false : true;
  }
}
function deleteMiddle(stack, N) {
  let count = 0;
  return solve(stack, N, count);
}

function solve(stack, size, count) {
  //base case
  if (count === size / 2) {
    stack.pop();
    return;
  }
  let number = stack.pop();

  //recursion
  solve(stack, size, count + 1);

  stack.push(number);
}
