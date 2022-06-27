function subarraySum(arr, n, s) {
  let start = 0,
    end = 0,
    sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    start = i;
    if (sum > s) {
      while (sum !== s) {
        sum -= arr[start];
      }
    }
  }
}
