function kSmallest(arr, k) {
  arr = arr.sort((a, b) => a - b);
  console.log(arr);
  return arr[k];
}
kSmallest([7, 10, 4, 20, 15], 5);
