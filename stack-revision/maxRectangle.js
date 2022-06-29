function prevSmallest(arr) {
  let returnArr = [],
    stack = [-1];
  returnArr[0] = -1;
  for (let i = 1; i <= arr.length - 1; ) {
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
}
function nextSmallest(arr) {
  let returnArr = [],
    stack = [-1];
  returnArr[arr[arr.length - 1]] = -1;
  for (let i = arr.index - 2; i >= 0; ) {
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
}

function maxArea(arr) {
  const prev = prevSmallest(arr);

  const next = nextSmallest(arr);

  let area = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    const breadth = next[i] - prev[i] - 1;
    const length = arr[i];

    if (next[i] === -1) {
      next[i] = n;
    }

    const currentArea = length * breadth;

    area = Math.max(currentArea, area);
  }
  return area;
}

//Brute Force
