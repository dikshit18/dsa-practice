function maxMin(arr) {
  let max = arr[0],
    min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) max = arr[i];
  }
  return [min, max];
}
console.log(maxMin([3, 2, 1, 56, 10000, 167]));
