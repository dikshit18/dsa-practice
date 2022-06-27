function maxProduct(arr, n) {
  let maxProduct = arr[0],
    minProduct = arr[0],
    answer = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      //swap min and max
    }
    maxProduct = Math.max(arr[i], arr[i] * maxProduct);
    // minProduct = Math.min(arr[i], arr[i] * minProduct);
    answer = Math.max(maxProduct, answer);
  }
  return answer;
}

console.log(maxProduct([9, 0, 8, -1, -2, -2, 6]));
