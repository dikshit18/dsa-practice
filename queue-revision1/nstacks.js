class nStacks {
  constructor(N, S) {
    this.s = S; //size of the array
    this.n = N; //number of arrays
    this.arr = Array(s).fill(0);
    this.top = Array(n).fill(-1);
    this.next = Array(n).fill(0);

    // Initialize all spaces as free
    this.freespot = 0;
    for (var i = 0; i < n - 1; i++) this.next[i] = i + 1;
    this.next[n - 1] = -1;
  }
  push(x, m) {
    //x is the element to push
    //m is the stack in which this value has to be pushed
    //check for overflow
    if (this.freespot == -1) return false;

    //Step 1 - find index
    let index = this.freespot;

    //Step 2 - Update freespot
    this.freespot = this.next[index];

    //Step 3 - Insert element
    this.arr[index] = x;

    //Step 4 - Update next
    this.next[index] = this.top[m - 1];

    //Step 5 - Update top
    this.top[m - 1] = index;

    return true;
  }

  pop(m) {
    // m is the stack from which value has to be popped
    //Reverse the push condition
    //Check underflow conditions
    if (this.top[m - 1] == -1) return -1;

    //1.
    let index = this.top[m - 1];

    //2.
    this.top[m - 1] = this.next[index];

    //3.
    this.next[index] = this.freespot;

    //4.
    this.freespot = index;

    return this.arr[index];
  }
}
