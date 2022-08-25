function knows(a, b) {
  if (arr[a][b] === 1) return true;
  else return false;
}
function celebrity(arr, n) {
  const stack = [];
  for (let i = 0; i < n; i++) {
    stack.push(arr[i]);
  }

  while (stack.length > 1) {
    const a = arr.pop();
    const b = arr.pop();

    if (knows(a, b)) {
      stack.push(b);
    } else {
      stack.push(a);
    }
  }
  let candidate = stack.pop();

  let rowCheck = false,
    rowCount = 0;
  for (let i = 0; i < n; i++) {
    if (arr[candidate][i] === 0) rowCount++;
  }
  if (rowCount === n) rowCheck = true;

  let colCheck = false,
    colCount = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i][candidate] === 1) colCount++;
  }
  if (colCount === n - 1) colCheck = true;

  if (rowCheck && colCheck) {
    return candidate;
  } else return -1;
}
