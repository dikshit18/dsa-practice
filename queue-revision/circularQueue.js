class CircularQueue {
  constructor() {
    this.data = [];
    this.front = this.rear = 0;
  }
  push(element) {
    if (
      this.rear === this.front - (1 % this.size) - 1 ||
      (this.front === 0 && this.rear === this.size - 1)
    ) {
      //Queue is full
      return;
    } else if (this.front === -1) {
      //Push
      this.data[this.rear] = element;
      this.rear++;
    } else if (this.rear === this.size && this.front != 0) {
      this.rear = 0;
      this.data[this.rear] = element;
      this.rear++;
    } else {
      this.data[this.rear] = element;
      this.rear++;
    }
  }
  pop() {}
}
