const { Queue } = require("./queue");
class QueueStack {
  constructor() {
    this.queue = new Queue();
  }

  /**
   * @param {number} x
   */

  //Function to push an element into stack using two queues.
  push(x) {
    this.queue.push(x);
    const size = this.queue.size() - 1;
    this.queue[size] = x;
    this.queue.pop();
  }

  /**
   * @returns {number}
   */

  //Function to pop an element from stack using two queues.
  pop() {
    // code here
  }
}
