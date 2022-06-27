class CircularQueue {
  constructor() {
    this.rear = -1;
    this.front = -1;
    this.data = [];
    this.size = 100001;
  }
  enqueue(x) {
    if (
      (this.front === 0 && this.rear === size - 1) ||
      this.rear === (this.front - 1) % (this.size - 1)
    ) {
      return;
    } else if (this.front === -1) {
      this.rear = this.front = 0;
      this.data[this.rear] = x;
    } else if (this.rear === this.size - 1 && this.front !== 0) {
      this.rear = 0;
      this.data[this.rear] = x;
    } else {
      this.rear++;
      this.data[this.rear] = x;
    }
    return true;
  }
  dequeue() {
    if (this.front === this.rear) return -1;
    const element = this.data[this.front];
    this.data[this.front] = -1;
    this.rear--;
    if (this.front === this.rear) {
      this.rear = 0;
      this.front = 0;
    } else if (this.front == this.size - 1) {
      this.front = 0;
    } else this.front++;
    return element;
  }
}
