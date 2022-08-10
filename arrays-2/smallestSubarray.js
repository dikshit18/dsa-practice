function smallestSubArray(arr, x) {
  let i = 0,
    j = 0,
    sum = 0;
  while (i < arr.length && j < arr.length) {
    while (sum <= x && j < arr.length) {
      sum += arr[j];
      j++;
    }
    while (sum > x) {
      min = Math.min(min, j - i);
      sum -= arr[i];
      i++;
    }
  }
}
