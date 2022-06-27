function smallestSubWithSum(arr, n, x) {
  arr = arr.sort((a, b) => a - b);
  let low = 0,
    high = 0,
    sum = 0,
    min;
  while (low <= high && high < n) {
    while (low < x && low < high) {
      sum += arr[low];
      low++;
    }
    while (sum > x && low < high) {
      min = Math.min(min, j - i);
      s -= arr[i];
      i++;
    }
  }
  return min;
}
