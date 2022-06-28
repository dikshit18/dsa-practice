function nextGreater(arr, n) {
  let stack = [arr[n - 1]],
    returnArr = [];
  returnArr[arr[n - 1]] = -1;
  for (let i = n - 2; i >= 0; ) {
    if (stack[stack.length - 1] > arr[i]) {
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
