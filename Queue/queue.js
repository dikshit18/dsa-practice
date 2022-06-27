class MyQueue {
  constructor() {
    this.data = [];
    this.front = 0;
    this.rear = 0;
    this.size = 10001;
    this.currentSize = 0;
  }
  push(x) {
    if (this.rear === this.size) {
      return;
    }
    this.data[this.rear] = x;
    this.currentSize++;
    this.rear++;
  }
  pop() {
    if (this.front === this.rear) {
      return -1;
    }
    const element = this.data[this.front];
    this.data[this.front] = -1;
    this.front++;
    this.currentSize--;
    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }
    return element;
  }
  isEmpty() {
    return this.size ? true : false;
  }
  size() {
    return this.currentSize;
  }
}
module.exports = { Queue: MyQueue };
