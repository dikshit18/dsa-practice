function minSwap(arr, n, k) {
  //code here
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
  let swap = good;
  for (let i = 0, j = good; j < n; i++, j++) {
    if (arr[i] > k) {
      bad--;
    }
    if (arr[j] > k) bad++;
    swap = Math.min(swap, bad);
  }
  console.log(swap);
  return swap;
}
minSwap([10, 12, 20, 20, 5, 19, 19, 12, 1, 20, 1], 11, 1);
