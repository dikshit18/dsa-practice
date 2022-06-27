//PeakElement;
//No comments and nothing to be noted.
function peakElement(arr, n) {
  let peak = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      peak = i;
    }
    if (!arr[i + 1]) {
      if (arr[i] > arr[i - 1]) {
        peak = i;
      }
    }
  }
  return peak;
}

console.log(
  peakElement(
    [6, 1, 15, 19, 9, 13, 12, 6, 7, 2, 10, 4, 1, 14, 11, 14, 14, 13],
    18
  )
);
