function smallestSub(arr, x) {
  let i = 0,
    j = 0,
    min = Number.MAX_SAFE_INTEGER,
    sum = 0;
  for (let i = 0; i < arr.length; i++) {
    while (i <= j && j < n) {
      while (s <= x && j < n) {
        sum += arr[j];
        min = Math.min(min, j - 1 + 1);
        j++;
      }
      while (s > x) {
        i++;
        min = Math.min(min, j - i);
        s -= arr[i];
      }
    }
  }
  return min;
}
