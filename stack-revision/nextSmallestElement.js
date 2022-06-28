function nextSmallestElement(arr, n) {
  let returnArr = [],
    stack = [arr[n - 1]];
  returnArr[n - 1] = -1;
  for (let i = arr.length - 2; i >= 0; ) {
    if (stack[stack.length - 1] < arr[i]) {
      returnArr[i] = stack[stack.length - 1];
      stack.push(arr[i]);
      i--;
    } else {
      stack.pop();
      if (stack.length === 0) {
        returnArr[i] = -1;
        stack.push(arr[i]);
        i--;
      }
    }
  }
  return returnArr;
}
console.log(nextSmallestElement([4, 8, 5, 2, 25], 5));
