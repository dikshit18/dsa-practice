class TwoStacks {
  constructor() {
    this.arr = new Array(100);
    this.size = 100;
    this.top1 = -1;
    this.top2 = 100;
  }

  /**
   * @param {number} x
   */
  //Function to push an integer into the stack1.
  push1(x) {
    if (top2 - top1 > 1) {
      this.arr[top1 + 1] = x;
      top1++;
    }
  }

  /**
   * @param {number} x
   */
  //Function to push an integer into the stack2.
  push2(x) {
    // code here
    if (top2 - top1 > 1) {
      this.arr[top2 - 1] = x;
      top2--;
    }
  }

  /**
   * @returns {number}
   */
  //Function to remove an element from top of the stack1.
  pop1() {
    if (top1 > 0) {
      const ans = this.arr[top1];
      top1--;
      return ans;
    } else return -1;
  }

  /**
   * @returns {number}
   */
  //Function to remove an element from top of the stack2.
  pop2() {
    if (top2 < size) {
      const ans = this.arr[top2];
      top1++;
      return ans;
    } else return -1;
    // code here
  }
}
