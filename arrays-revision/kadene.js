function kadene(arr) {
  let maxSum = arr[0],
    currSum = 0;
  for (let i = 1; i < arr.length; i++) {
    currSum += arr[i];
    maxSum = Math.max(maxSum, currSum);
    if (currSum < 0) currSum = 0;
  }
  return maxSum;
}
console.log(kadene([1, 2, 3, -2, 5]));
