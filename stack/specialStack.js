class SpecialStack {
  constructor() {
    this.top = -1;
    this.mini = Number.MAX_SAFE_INTEGER;
    this.items = [];
    this.size = 100;
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (!this.items) this.items.push(x);
    else {
      if (x < this.mini) {
        const min = 2 * x - this.mini;
        this.items.push(min);
        this.mini = x;
      } else this.items.push(x);
    }
    top++;
  }
  /**
   * @return {number}
   */
  pop() {
    if (!this.items) {
      return -1;
    }
    const current = this.items[this.items.length - 1];
    if (current > mini) {
      this.items.pop();
      top--;
    } else {
      let prevMin = this.mini;
      const curr = 2 * this.mini - current;
      mini = curr;
      return prevMin;
    }
  }

  /**
   * @return {boolean}
   */

  isFull() {
    if (this.top === this.size - 1) return true;
    else return false;
  }
  /**
   * @return {boolean}
   */
  isEmpty() {
    if (this.top < 0) return true;
    else return false;
  }
  /**
   * @return {number}
   */
  getMin() {
    return mini;
  }
}
