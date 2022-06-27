function permutation(arr) {
  if (arr.length === 1) return arr;
  let i = arr.length - 2;
  while (i >= 0 && arr[i] > arr[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = arr.length - 1;
    while (a[j] <= a[i]) {
      j--;
    }
    arr = swap(arr, i, j);
  }
  reverse(arr, i + 1, arr.length - 1);
  return arr;
}
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
}
function reverse(arr, i, j) {
  while (i < j) arr = swap(arr, i++, j);
  return arr;
}
