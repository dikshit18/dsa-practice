function kadene(arr) {
  let currSum = 0,
    maxSum = 0;
  for (let index = 0; index < arr.length; index++) {
    currSum += arr[index];
    if (currSum > maxSum) maxSum = currSum;
    if (currSum < 0) currSum = 0;
  }
  return maxSum;
}
