function rearrange(arr, n) {
  for (let i = 0; i < arr.length; i = i + 2) {
    const lastElement = arr[n - 1];
    arr.pop();
    arr.splice(i, 0, lastElement);
  }
  return arr;
}
rearrange([1, 2, 3, 4, 5, 6], 6);
