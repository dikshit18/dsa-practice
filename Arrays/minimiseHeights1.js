function minimiseHeights(arr, N, k) {
  arr = arr.sort((a, b) => a - b);
  let diff = arr[N - 1] - arr[0];
  let min, max;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - k < 0) continue;
    min = Math.min(arr[i] + k, arr[0] - k);
    max = Math.max(arr[i - 1] + k, arr[i - 1] - k);
    diff = Math.min(diff, max - min);
  }
  return diff;
}

console.log(minimiseHeights([2, 6, 3, 4, 7, 2, 10, 3, 2, 1], 10, 5));
