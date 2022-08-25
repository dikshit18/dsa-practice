function rectArea(arr, n) {
  const next = calculateNextSmallest(arr);
  const prev = calculatePrevSmallest(arr);
  let area = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (next[i] === -1) next[i] = n;
    const width = next[i] - prev[i] - 1;
    const currentArea = width * arr[i];

    area = Math.max(area, currentArea);
  }
  return area;
}
function calculateNextSmallest(arr) {
  const stack = [-1];
  let answer = [];
  for (let i = arr.length - 1; i >= 0; i++) {
    let curr = arr[i];
    while (stack[stack.length - 1] != -1 && stack[stack.length - 1] >= curr) {
      stack.pop();
    }
    answer[i] = stack[stack.length - 1];
    stack.push(i);
  }
  return answer;
}
function calculatePrevSmallest(arr) {
  const stack = [-1];
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    while (stack[stack.length - 1] != -1 && stack[stack.length - 1] >= curr) {
      stack.pop();
    }
    answer[i] = stack[stack.length - 1];
    stack.push(curr);
  }
  return answer;
}
