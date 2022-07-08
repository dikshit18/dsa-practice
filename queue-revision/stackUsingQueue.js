const { Queue } = require("./queue");
class QueueStack {
  constructor() {
    this.q1 = new Queue();
  }
  push(element) {
    if (this.q1.rear === this.q1.size) return;
    this.q1.push(element);
  }
  pop() {
    if ((this.q1.rear = this.q1.front)) return;
    const element = this.q1[this.rear];
    this.q1[this.rear] = -1;
    this.rear--;
    return element;
  }
}
const obj = new QueueStack();
obj.push(1);
obj.push(2);
obj.push(3);
obj.push(4);
console.log(obj);
console.log(obj.pop());
