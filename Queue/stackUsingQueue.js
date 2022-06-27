const { Queue } = require("./queue");
class QueueStack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }

  /**
   * @param {number} x
   */

  //Function to push an element into stack using two queues.
  push(x) {
    this.q1.push(x);
    while (!this.q2.isEmpty()) {
      const elem = this.q2.pop();
      this.q1.push(elem);
    }
    while (!this.q1.isEmpty()) {
      const elem = this.q1.pop();
      this.q2.push(elem);
    }
    return;
  }

  /**
   * @returns {number}
   */

  //Function to pop an element from stack using two queues.
  pop() {
    // code here
    let answer;
    if (this.q2.isEmpty()) {
      return -1;
    } else {
      answer = this.q2.pop();
      return answer;
    }
  }
}
