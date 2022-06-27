function maxRectangle(heights) {
  let leftPart = leftSmallestPart();
  let rightPart = rightSmallestPart(),
    maxRect = Number.MIN_VALUE;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const diff = rightPart - leftPart - 1;
    maxRect = Math.max(diff, maxRect);
  }
  return maxRect;
}

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
