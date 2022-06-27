class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
    this.middle = -1;
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
