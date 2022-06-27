class TwoStacks {
  constructor() {
    this.items = [];
    this.size = 100;
    this.top1 = -1;
    this.top2 = this.size / 2;
  }
  push1(element) {
    if (this.top1 < this.size / 2) {
      this.items[this.top1 + 1] = element;
      this.top1++;
    }
    //return this.items;
  }
  push2(element) {
    if (this.top2 < this.size) {
      this.items[this.top2 + 1] = element;
      this.top2++;
    }
    //return this.items;
  }
  pop1() {
    if (this.top11 >= 0) {
      const elem = this.items[this.top1];
      this.top1--;
      return elem;
    } else return -1;
  }
  pop2() {
    if (this.top2 >= this.size / 2) {
      const elem = this.items[this.top2];
      this.top2--;
      return elem;
    } else return -1;
  }
}
