class TwoStacks {
  constructor() {
    this.array = [];
    this.top1 = 0;
    this.top2 = this.array.length;
  }
  push1(elem) {
    if (this.top2 - this.top1 > 1) {
      this.top++;
      this.array[top1] = elem;
    } else {
      //
    }
  }
  push2(elem) {
    if (this.top2 - this.top1 > 1) {
      this.top2--;
      this.array[this.top2] = elem;
    }
  }
  pop1() {
    if (this.top1 > 0) {
      this.array[this.top1] = -1;
      this.top--;
    }
  }
  pop2() {
    if (this.top2 < this.array.length) {
    }
  }
}
