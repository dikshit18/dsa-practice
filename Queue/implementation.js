class Queue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.data = [];
    this.size = 0;
  }
  enqueue(x) {
    if (this.rear === this.size) {
      return;
    }
    this.data[this.rear] = x;
    this.rear++;
  }
  dequeue() {
    if (this.front === this.rear) return -1;
    const element = this.data[this.front];
    this.data[this.front] = -1;
    this.rear--;
    if (this.front === this.rear) {
      this.rear = 0;
      this.front = 0;
    }
    return element;
  }
}
