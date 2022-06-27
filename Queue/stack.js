class Stack {
  constructor() {
    this.arr = [];
    this.top = -1;
  }
  push(x) {
    this.arr.push(x);
    this.top++;
  }
  pop() {
    const elem = this.arr.pop();
    this.top--;
    return elem;
  }
  front() {
    return this.arr[this.top];
  }
  empty() {
    return this.top < 0 ? true : false;
  }
}
module.exports = { Stack };
