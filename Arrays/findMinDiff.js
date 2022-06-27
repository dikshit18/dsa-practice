function findMinDiff(arr, n, m) {
  arr = arr.sort((a, b) => a - b);
  let min = arr[m - 1] - arr[0];
  for (let i = 0; i + m < arr.length; i++) {
    min = Math.min(min, arr[i + m - 1] - arr[i]);
  }
  return min;
}
console.log(
  findMinDiff(
    [
      34, 88, 89, 39, 67, 71, 85, 57, 18, 7, 61, 50, 38, 6, 60, 18, 19, 46, 84,
      74, 59,
    ],
    21,
    12
  )
);
