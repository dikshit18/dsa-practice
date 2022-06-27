function max(arr) {
  let maxProduct = 0,
    currProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    currProduct *= arr[i];
    maxProduct = Math.max(currProduct, maxProduct);
    if (currProduct === 0) currProduct = 1;
  }
  return maxProduct;
}
console.log(max([0, 3, 4, 5, -1, 0]));
