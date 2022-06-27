const { Stack } = require("./stack");
class QueueUsingStack {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  push(x) {
    this.stack1.push(x);
    while (this.stack1.top < 0) {
      const elem = this.stack1[this.stack1.top - 1];
      this.stack2.push(elem);
      this.stack1.pop();
    }
  }
  pop() {}
}
