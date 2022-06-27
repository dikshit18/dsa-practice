function nextSmallest(heights) {
  const returnArr = [];
  let stack = [];
  returnArr[heights.length - 1] = -1;
  stack.push(-1);
  stack.push(heights[heights.length - 1]);
  for (let i = heights.length - 2; i >= 0; i--) {
    if (stack[stack.length - 1] < heights[i]) {
      returnArr[i] = stack[stack.length - 1];
      stack.push(heights[i]);
    } else {
      while (stack.length != 0) {
        stack.pop();
        if (stack[stack.length - 1] < heights[i]) {
          returnArr[i] = stack[stack.length - 1];
          break;
        }
      }
      stack.push(heights[i]);
    }
  }
  return returnArr;
}
nextSmallest([2, 1, 4, 3]);
