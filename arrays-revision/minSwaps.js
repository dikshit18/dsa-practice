function minSwaps(arr, k) {
  let good = 0,
    bad = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k) {
      good++;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k) {
      bad++;
    }
  }
  let i = 0,
    j = good - 1,
    min = Number.MAX_SAFE_INTEGER;
  while (j < n) {
    min = Math.min(min, bad);
    r++;
    if (arr[i] > k) {
      bad--;
    }
    if (arr[j] > k) bad++;
    l++;
  }
  return min;
}
