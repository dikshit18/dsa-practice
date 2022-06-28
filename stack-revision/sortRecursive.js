// function insertAtPosition(x, arr) {
//   if (!arr.length && x > arr[arr.length - 1]) {
//     arr.push(x);
//   } else {
//     const el = arr.pop();
//     insertAtPosition(x, arr);
//     arr.push(el);
//   }
//   return arr;
// }
// function reverse(arr) {
//   while (arr.length) {
//     let x = arr.pop();
//     reverse(arr);
//     arr = insertAtPosition(x, arr);
//     return arr;
//   }
// }
// console.log(reverse([1, 2, 3, 4, 5, 6]));
class Stack {
  constructor() {
    this.stack = [11, 2, 32, 3, 41];
  }
}

Stack.prototype.insertAtPosition = function (x, arr) {
  if (!arr.length || x < arr[arr.length - 1]) {
    arr.push(x);
  } else {
    const el = arr.pop();
    this.insertAtPosition(x, arr);
    arr.push(el);
  }
  return arr;
};

/* The below method sorts the stack s 
  you are required to complete the below method */
Stack.prototype.sort = function () {
  while (this.stack.length) {
    let x = this.stack.pop();
    this.sort(this.stack);
    this.stack = this.insertAtPosition(x, this.stack);
    return this.stack;
  }
  //code here
};
(() => {
  let s = new Stack();
  console.log(s.sort());
})();
