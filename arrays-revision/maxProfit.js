function maxProfit(arr) {
  let profit = 0,
    min = 0,
    max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] > arr[i]) {
      min = Math.min(min, arr[i]);
    }
    if (arr[i] > arr[i + 1]) {
    }
  }
}
