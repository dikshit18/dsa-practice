function nextLargerElement(arr, n) {
  let stack = [arr[n - 1]],
    newArr = [];
  newArr[n - 1] = -1;
  for (let i = n - 2; i >= 0; ) {
    if (stack[stack.length - 1] > arr[i]) {
      newArr[i] = stack[stack.length - 1];
      stack.push(arr[i]);
      i--;
    } else {
      stack.pop();
      if (stack.length === 0) {
        newArr[i] = -1;
        stack.push(arr[i]);
        i--;
      }
    }
  }
  return newArr;
}
console.log(nextLargerElement([7, 8, 1, 4], 4));
