function subarraySum(arr, n, s) {
  let sum = 0,
    start = 0,
    last = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > s) {
      last = i;
      while ((sum > s) & (start < last)) {
        sum -= arr[start];
        start++;
      }
    } else if (sum === s) {
      console.log(start);
      console.log(last);
    } else return -1;
  }
}
subarraySum([1, 2, 3, 7, 5], 5, 12);
