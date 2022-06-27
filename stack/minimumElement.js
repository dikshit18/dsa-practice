class SpecialStack {
  constructor() {
    this.top = -1;
    this.min = Number.MAX_SAFE_INTEGER;
    this.items = [];
    this.size = 100;
  }
  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    if (this.top < this.size) {
      this.items.push(x);
      if (x < this.min) {
        this.min = x;
      }
      this.top++;
    }
  }
  /**
   * @return {number}
   */
  pop() {
    let number;
    if (this.top >= 0) {
      number = this.items.pop();
      this.top--;
    }
    return number;
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
    return this.min;
  }
}
const obj = new SpecialStack();
obj.push(10);
console.log(obj.getMin());
