class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }
  push(x) {
    this.data.push(x);
    this.length++;
    return this.data;
  }
  pop() {
    this.data.pop();
    this.length--;
    return this.data;
  }
}
module.exports = { Stack };
