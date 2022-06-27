function celebrity(arr, n) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    stack.push(i);
  }
  while (stack.length > 1) {
    const elem1 = stack.pop();
    const elem2 = stack.pop();
    if (knows(arr, elem1, elem2)) {
      stack.push(elem2);
    } else {
      stack.push(elem1);
    }
  }
  let candidate = stack.pop();
  //found the potential celebrity
  let rowCheck = false;
  let zeroCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (M[candidate][i] === 0) {
      zeroCount++;
    }
  }
  if (zeroCount === n) {
    rowCheck = true;
  }
  let colCheck = false;
  let colCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (M[i][candidate] === 0) {
      colCount++;
    }
  }
  if (zeroCount === n - 1) {
    //diagnol
    colCheck = true;
  }
  if (rowCheck && colCheck) {
    return candidate;
  } else return -1;
}
function knows(arr, a, b) {
  if (arr[a][b] === 1) return true;
  else return false;
}
