function chocolate(arr, n, m) {
  arr = arr.sort((a, b) => a - b);
  let difference = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    const diff = arr[i + m - 1] - arr[i];
    difference = Math.min(diff, difference);
  }
  return difference;
}
