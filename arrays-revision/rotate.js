function rotate(arr) {
  const last = arr[arr.length - 1];
  let i = arr.length - 1;
  while (i >= 0) {
    arr[i] = arr[i - 1];
    i--;
  }
  arr[0] = last;
  return arr;
}
console.log(rotate([1, 2, 3, 4, 5]));
