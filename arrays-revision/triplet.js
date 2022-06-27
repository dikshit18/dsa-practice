function triplet(arr) {
  arr = arr.sort((a, b) => a - b);
  let low = 0,
    high = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    const remaining = X - arr[i];
    while (low < high) {
      if (arr[i] + arr[low] + arr[high] === X) return 1;
      else if (arr[i] + arr[low] + arr[high] < X) {
        low++;
      } else high--;
    }
  }
}
