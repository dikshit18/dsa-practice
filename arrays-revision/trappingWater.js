function trappingWater(arr, n) {
  //   let diffArray = [arr[0]];
  //   let max = arr[0];
  //   for (let i = 1; i < arr.length; i++) {
  //     max = Math.max(max, arr[i]);
  //     diffArray.push(max);
  //   }
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     sum += diffArray[i] - arr[i];
  //   }
  //   return sum;

  const leftArray = [arr[0]],
    rightArray = [];
  for (let i = 1; i < arr.length; i++) {
    const res = Math.max(leftArray[i - 1], arr[i]);
    leftArray.push(res);
  }
  console.log(leftArray);
  rightArray[n - 1] = [arr[n - 1]];
  for (let index = n - 2; index >= 0; index--) {
    const res = Math.max(rightArray[index + 1], arr[index]);
    rightArray[index] = res;
  }
  console.log(rightArray);

  let answer = 0;
  for (let i = 0; i < leftArray.length; i++) {
    answer += Math.min(leftArray[i], rightArray[i]) - arr[i];
  }
  return answer;
}
console.log(trappingWater([3, 0, 0, 2, 0, 4], 6));
