function getMinDiff(arr, N, K) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  let res = arr[arr.length - 1] - K - (arr[0] + K);
  if (res < 0) {
    let i = 1;
    while (res < 0) {
      res = arr[arr.length - 1 - i] + K - (arr[0 + i] + K);
      i++;
    }
  }
  return res;
}
const res = getMinDiff([2, 6, 3, 4, 7, 2, 10, 3, 2, 1], 10, 5);
console.log(res);
