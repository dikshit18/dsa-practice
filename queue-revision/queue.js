class Queue {
  constructor() {
    this.data = [];
    this.front = 0;
    this.rear = 0;
    this.size = Number.MAX_SAFE_INTEGER;
    this.currentSize = 0;
  }
  push(item) {
    if (this.rear === this.size) {
      return;
    }
    this.data[this.rear] = item;
    this.rear++;
    this.size++;
    this.currentSize++;
  }
  pop() {
    if (this.front === this.rear) {
      return -1;
    }
    // const element = this.data[this.front];
    this.front++;
    this.currentSize--;
    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }
    return this.data.shift();
  }
  isEmpty() {
    return this.currentSize ? false : true;
  }
  size() {
    return this.size;
  }
  rev() {
    if (!this.isEmpty()) {
      //if (q && !q.empty()) {
      const item = q.pop();
      this.rev(q);
      q.push(item);
    }
    return this.data;
  }
}
const q = new Queue();
q.push(1);
q.push(2);
q.push(3);
console.log(q);
q.rev();
console.log(q);

//module.exports = { Queue };
