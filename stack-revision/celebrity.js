function celebrity(arr, n) {
  let stack = [];
  for (let i = 0; i < n; i++) {
    stack.push(arr[i]);
  }
  while (stack.length > 1) {
    const elem1 = stack.pop();
    const elem2 = stack.pop();
    if (this.knows(arr, elem1, elem2)) {
      stack.push(elem2);
    } else stack.push(elem1);
  }
  //now we have the potential candidate
  let rowCheck = 0,
    rowCount = 0;
  const candidate = stack.pop();
  for (let i = 0; i < arr.length; i++) {
    if (arr[candidate][i] === 0) {
      rowCount++;
    }
  }
}
function knows(arr, a, b) {
  if (arr[a][b] === 1) {
    return true;
  } else return false;
}
