function rotate(arr, n) {
  const element = arr[arr.length - 1];
  arr.pop();
  arr.unshift(element);
  return arr;
}
console.log(rotate([1, 2, 3, 4, 5]));
